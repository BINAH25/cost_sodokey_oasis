from rest_framework import serializers

from .models import Appointment


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "service",
            "location",
            "date",
            "time",
            "message",
            "status",
            "created_at",
        ]
        # The client never sets status; the server manages it.
        read_only_fields = ["id", "status", "created_at"]
