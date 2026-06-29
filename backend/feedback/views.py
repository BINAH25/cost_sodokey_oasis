from rest_framework import generics, permissions

from .emails import send_feedback_notification
from .models import Feedback
from .serializers import FeedbackSerializer, PublishedFeedbackSerializer


class FeedbackListCreateView(generics.ListCreateAPIView):
    """
    Public feedback endpoint.

    - POST: accept a customer feedback / testimonial submission (saved unpublished).
    - GET:  return feedback an admin has marked as published, for the website's
            testimonials section (newest first, capped).
    """

    permission_classes = [permissions.AllowAny]
    # Anonymous public submission — no session auth, so no CSRF enforcement
    # (which otherwise 403s browsers that carry an admin session cookie).
    authentication_classes = []

    def get_queryset(self):
        return Feedback.objects.filter(is_published=True).order_by("-created_at")[:12]

    def get_serializer_class(self):
        if self.request.method == "POST":
            return FeedbackSerializer
        return PublishedFeedbackSerializer

    def perform_create(self, serializer):
        feedback = serializer.save()
        # Notify the owner so they can review/publish. Failures are logged.
        send_feedback_notification(feedback)
