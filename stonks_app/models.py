from django.db import models

# Create your models here.
class Stonk(models.Model):
    ticker = models.CharField("Ticker", max_length=10)
    name = models.CharField("Stock Name", max_length=100)
    numShares = models.IntegerField("Shares", default=20)
    purchaseDate = models.DateField("Purchase Date", auto_now_add=True)

    def __str__(self):
        return self.name