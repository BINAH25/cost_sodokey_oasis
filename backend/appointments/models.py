from django.db import models


class Appointment(models.Model):
    """A booking request submitted from the website (booking modal or contact form)."""

    class Location(models.TextChoices):
        SANCTUARY = "sanctuary", "At the Sanctuary"
        HOME = "home", "Home Service"

    class Status(models.TextChoices):
        PENDING = "pending", "Pending"
        CONFIRMED = "confirmed", "Confirmed"
        COMPLETED = "completed", "Completed"
        CANCELLED = "cancelled", "Cancelled"

    name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=40)
    service = models.CharField(max_length=120)
    location = models.CharField(
        max_length=20,
        choices=Location.choices,
        default=Location.SANCTUARY,
    )
    # Date/time are optional: the contact form does not collect them, the modal does.
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    message = models.TextField(blank=True)

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        when = f" on {self.date}" if self.date else ""
        return f"{self.name} — {self.service}{when}"
