from django.shortcuts import render
from rest_framework.views import APIView
from . models import NewsArticle, Builders
from rest_framework.response import Response
from . serializers import NewsArticleSerializer, BuildersSerializer

class NewsArticleList(APIView):
    serializer_class = NewsArticleSerializer
    def get(self, request):
        news = NewsArticle.objects.all()
        serializer = NewsArticleSerializer(news, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NewsArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class BuildersList(APIView):
    serializer_class = BuildersSerializer
    def get(self, request):
        news = Builders.objects.all()
        serializer = BuildersSerializer(news, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BuildersSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
