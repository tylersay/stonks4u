from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Stonk
from .serializers import StonksSerializer
# Create your views here.


@api_view(['GET', 'POST'])
def stonk_list(request):
    if request.method == 'GET':
        data = Stonk.objects.all()

        serializer = StonksSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StonksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def stonks_detail(request, pk):
    try:
        stonk = Stonk.objects.get(pk=pk)
    except Stonk.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = StonksSerializer(stonk, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        stonk.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)