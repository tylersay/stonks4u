from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import status

from .models import Stonk
from .serializers import StonksSerializer
# Create your views here.


class StonksViewSet(viewsets.ModelViewSet):
    queryset = Stonk.objects.all()
   
    serializer_class = StonksSerializer
    
    permission_classes = [permissions.AllowAny] 