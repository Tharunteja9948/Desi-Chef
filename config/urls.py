"""
URL Configuration for DesiChef - Your Personal Chef.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse
from django.db import connection
from apps.recipes.views import home_view, recipe_detail_view


def health_check_view(request):
    """Production health-check endpoint for Render and uptime monitoring."""
    db_ok = True
    try:
        connection.ensure_connection()
    except Exception:
        db_ok = False

    status_code = 200 if db_ok else 503
    return JsonResponse({
        'status': 'ok' if db_ok else 'degraded',
        'service': 'DesiChef',
        'database': 'connected' if db_ok else 'disconnected'
    }, status=status_code)


urlpatterns = [
    # Health check for Render Web Service
    path('health/', health_check_view, name='health_check'),

    # Admin Interface
    path('admin/', admin.site.urls),

    # Main Frontend Application
    path('', home_view, name='home'),
    path('recipes/<str:recipe_uid>/', recipe_detail_view, name='recipe_detail'),
    path('recipe/<str:recipe_uid>/', recipe_detail_view, name='recipe_detail_alias'),

    # REST API Endpoints (v1)
    path('api/v1/health/', health_check_view, name='api_health_check'),
    path('api/v1/auth/', include('apps.accounts.urls')),
    path('api/v1/recipes/', include('apps.recipes.urls')),
    path('api/v1/ingredients/', include('apps.ingredients.urls')),
    path('api/v1/pantry/', include('apps.pantry.urls')),
    path('api/v1/recommendations/', include('apps.recommendations.urls')),
    path('api/v1/favorites/', include('apps.favorites.urls')),
    path('api/v1/shopping/', include('apps.shopping.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
