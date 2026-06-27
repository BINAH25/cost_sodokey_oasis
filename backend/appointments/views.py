from rest_framework import generics, permissions

from .models import Appointment
from .serializers import AppointmentSerializer


class AppointmentCreateView(generics.CreateAPIView):
    """Public endpoint: accept a booking request from the website."""

    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.AllowAny]
