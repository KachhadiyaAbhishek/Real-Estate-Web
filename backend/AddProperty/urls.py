from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import ListingsView , DetailView

urlpatterns = [
    path('add/', ListingsView.as_view(), name='card-list'),
    path('property/<int:id>/', DetailView.as_view(), name='DetailView'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
