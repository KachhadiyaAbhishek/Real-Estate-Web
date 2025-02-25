from rest_framework import serializers
from . models import NewsArticle, Builders

class NewsArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsArticle
        fields = ['id', 'title', 'news_img', 'category', 'date', 'link']

class BuildersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Builders
        fields = '__all__'