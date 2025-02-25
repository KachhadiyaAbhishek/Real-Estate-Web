from django.contrib import admin
from .models import Listing

# class PropertyAdmin(admin.ModelAdmin):
#     fields =  ('title', 'description','created_at')
    
admin.site.register(Listing)