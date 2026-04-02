from django.urls import path
from . import views

urlpatterns = [
    path('',        views.register,   name='register'),
    path('users/',  views.user_list,  name='user_list'),
]
