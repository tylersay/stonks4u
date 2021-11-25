from django.contrib import admin
from .models import Stonk
# Register your models here.
class StonkAdmin(admin.ModelAdmin):
  fields = ['ticker', 'name', 'numShares', 'purchaseDate']

admin.site.register(Stonk, StonkAdmin)