"""Email notification for new customer feedback."""

import logging

from django.conf import settings
from django.template.loader import render_to_string

from config.email_utils import send_branded_email

logger = logging.getLogger(__name__)


def send_feedback_notification(feedback):
    """
    Notify the business owner (branded HTML) that new feedback was submitted so
    they can review and publish it. Failures are logged but never raised.
    """
    stars = "★" * feedback.rating + "☆" * (5 - feedback.rating)

    text_body = (
        "A new feedback submission was received:\n\n"
        f"Name: {feedback.name}\n"
        f"Rating: {feedback.rating} / 5\n\n"
        f"Message:\n{feedback.message}\n\n"
        "Review and publish it in the admin to show it on the website:\n"
        "https://oasismassagewellness.com/admin/feedback/feedback/"
    )

    html_body = render_to_string(
        "emails/feedback_notification.html",
        {"feedback": feedback, "stars": stars},
    )

    send_branded_email(
        subject=f"New Oasis Feedback — {feedback.rating}★ from {feedback.name}",
        text_body=text_body,
        html_body=html_body,
        to=[settings.OWNER_NOTIFICATION_EMAIL],
    )
