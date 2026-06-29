"""Shared helpers for sending branded HTML emails with the embedded logo."""

import logging
from email.mime.image import MIMEImage
from pathlib import Path

from django.conf import settings
from django.core.mail import EmailMultiAlternatives

logger = logging.getLogger(__name__)

# The logo is embedded inline (CID) so it renders in every email client
# without "show images" prompts. Templates reference it as: src="cid:oasis-logo"
LOGO_PATH = Path(settings.BASE_DIR) / "assets" / "oasis-logo.jpeg"
LOGO_CID = "oasis-logo"


def send_branded_email(*, subject, text_body, html_body, to, cc=None, reply_to=None):
    """
    Build and send an EmailMultiAlternatives with the HTML body and the Oasis
    logo embedded inline. Failures are logged, not raised.
    """
    try:
        email = EmailMultiAlternatives(
            subject=subject,
            body=text_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=to,
            cc=cc or None,
            reply_to=reply_to or None,
        )
        email.attach_alternative(html_body, "text/html")

        # Embed the logo so html can reference cid:oasis-logo.
        try:
            with open(LOGO_PATH, "rb") as f:
                img = MIMEImage(f.read())
            img.add_header("Content-ID", f"<{LOGO_CID}>")
            img.add_header("Content-Disposition", "inline", filename="oasis-logo.jpeg")
            email.attach(img)
            email.mixed_subtype = "related"
        except FileNotFoundError:
            logger.warning("Email logo not found at %s; sending without it.", LOGO_PATH)

        email.send(fail_silently=False)
    except Exception:  # noqa: BLE001 — never let email break the request
        logger.exception("Failed to send email: %s", subject)
