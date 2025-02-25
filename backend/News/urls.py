from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import NewsArticleList, BuildersList

urlpatterns = [
    path('news/', NewsArticleList.as_view(), name='news-article-list'),
    path('builder/', BuildersList.as_view(), name='builder-list'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
