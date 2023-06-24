from django.contrib import admin
from .models import *


class CompanyInfoAdmin(admin.ModelAdmin):
    list_display = ['mission', 'vision', 'objectives']  
admin.site.register(CompanyInfo, CompanyInfoAdmin)

