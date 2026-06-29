"""Email notifications for appointment bookings."""

import logging

from django.conf import settings
from django.template.loader import render_to_string

from config.email_utils import send_branded_email

logger = logging.getLogger(__name__)


def send_appointment_emails(appointment):
    """
    Send a branded HTML booking confirmation to the client and CC the owner.

    Failures are logged but never raised — a mail problem must not stop the
    booking from being saved.
    """
    location = dict(appointment.Location.choices).get(appointment.location, appointment.location)

    # Plain-text fallback for clients that don't render HTML.
    when = ""
    if appointment.date:
        when = f"\nDate: {appointment.date}"
        if appointment.time:
            when += f"\nTime: {appointment.time}"
    text_body = (
        f"Hi {appointment.name},\n\n"
        "Thank you for booking with Oasis Massage & Wellness. We've received your "
        "request and will be in touch shortly to confirm.\n\n"
        f"Service: {appointment.service}\n"
        f"Location: {location}"
        f"{when}\n"
        f"Phone: {appointment.phone}\n"
        + (f"Notes: {appointment.message}\n" if appointment.message else "")
        + "\nRelax • Renew • Restore • Revive\n"
        "Oasis Massage & Wellness\n"
        "Darkuman, opposite Sunflower School, Star Oil — Accra"
    )

    html_body = render_to_string(
        "emails/appointment_confirmation.html",
        {"appointment": appointment, "location": location},
    )

    send_branded_email(
        subject="Your Oasis Wellness Booking Request",
        text_body=text_body,
        html_body=html_body,
        to=[appointment.email],
        cc=[settings.OWNER_NOTIFICATION_EMAIL],
        reply_to=[settings.OWNER_NOTIFICATION_EMAIL],
    )
