from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import ContactAPIView, EmailSend

urlpatterns = [
    path('contact/', ContactAPIView.as_view(), name='send_email_view'),
    path('email/', EmailSend.as_view(), name='email_view'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
