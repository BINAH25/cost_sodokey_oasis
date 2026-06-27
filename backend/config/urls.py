from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path


def health(_request):
    """Lightweight health check for Docker / load balancers."""
    return JsonResponse({"status": "ok"})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health, name="health"),
    path("api/appointments/", include("appointments.urls")),
    path("api/feedback/", include("feedback.urls")),
]
