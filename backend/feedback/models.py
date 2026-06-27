from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Feedback(models.Model):
    """A customer testimonial / experience review submitted from the website."""

    name = models.CharField(max_length=120)
    rating = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        help_text="Star rating from 1 to 5.",
    )
    message = models.TextField()

    # Lets staff curate which reviews are shown publicly later.
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Feedback"
        verbose_name_plural = "Feedback"

    def __str__(self):
        return f"{self.name} — {self.rating}★"
