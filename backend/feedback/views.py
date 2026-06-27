from rest_framework import generics, permissions

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

    def get_queryset(self):
        return Feedback.objects.filter(is_published=True).order_by("-created_at")[:12]

    def get_serializer_class(self):
        if self.request.method == "POST":
            return FeedbackSerializer
        return PublishedFeedbackSerializer
