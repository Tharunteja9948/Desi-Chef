"""
URL Configuration for AI Chef Indian Recipe Discovery & Cooking Platform.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    # Admin Interface
    path('admin/', admin.site.urls),

    # Main Frontend Application
    path('', TemplateView.as_view(template_name='index.html'), name='home'),

    # REST API Endpoints (v1)
    path('api/v1/auth/', include('apps.accounts.urls')),
    path('api/v1/recipes/', include('apps.recipes.urls')),
    path('api/v1/ingredients/', include('apps.ingredients.urls')),
    path('api/v1/pantry/', include('apps.pantry.urls')),
    path('api/v1/recommendations/', include('apps.recommendations.urls')),
    path('api/v1/favorites/', include('apps.favorites.urls')),
    path('api/v1/shopping/', include('apps.shopping.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
