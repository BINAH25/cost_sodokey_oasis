from django.contrib import admin

from .models import Appointment


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "service",
        "location",
        "date",
        "time",
        "status",
        "created_at",
    )
    list_filter = ("status", "location", "service", "created_at")
    search_fields = ("name", "email", "phone", "message")
    list_editable = ("status",)
    readonly_fields = ("created_at", "updated_at")
    date_hierarchy = "created_at"
