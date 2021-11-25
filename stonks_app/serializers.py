from rest_framework import serializers
from .models import Stonk

class StonksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stonk 
        fields = ('pk', 'ticker', 'name', 'numShares', 'purchaseDate')