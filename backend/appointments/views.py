from rest_framework import generics, permissions

from .emails import send_appointment_emails
from .models import Appointment
from .serializers import AppointmentSerializer


class AppointmentCreateView(generics.CreateAPIView):
    """Public endpoint: accept a booking request from the website."""

    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        appointment = serializer.save()
        # Notify the client (and CC the owner). Failures are logged, not raised.
        send_appointment_emails(appointment)
