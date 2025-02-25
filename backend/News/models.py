from django.db import models
from django.utils.timezone import now

class NewsArticle(models.Model):
    title = models.CharField(max_length=255)
    news_img = models.ImageField(upload_to='photos/%Y/%m/%d/')
    category = models.CharField(max_length=100)
    date = models.DateField()
    link = models.URLField(max_length=500)

    def __str__(self):
        return self.title

class Builders(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    
    def __str__(self):
        return self.title