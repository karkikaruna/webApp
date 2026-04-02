from django.contrib import admin
from .models import UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'username', 'email', 'age', 'gender', 'created_at']
    list_filter  = ['gender']
    search_fields = ['name', 'username', 'email']
