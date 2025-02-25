from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404
from . models import Listing
from rest_framework.response import Response
from . serializers import *

class ListingsView(APIView):
    serializer_class = ListingSerializer
    def get(self, request):
        cards = Listing.objects.all()
        serializer = ListingSerializer(cards, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ListingSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    
class DetailView(APIView):
    def get(self, request, id):
        print(request.data)
        product = get_object_or_404(Listing, id=id)
        serializer = ListingSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)