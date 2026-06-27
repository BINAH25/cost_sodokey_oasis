from django.contrib import admin

from .models import Feedback


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ("name", "rating", "is_published", "created_at")
    list_filter = ("rating", "is_published", "created_at")
    search_fields = ("name", "message")
    list_editable = ("is_published",)
    readonly_fields = ("created_at",)
    date_hierarchy = "created_at"
