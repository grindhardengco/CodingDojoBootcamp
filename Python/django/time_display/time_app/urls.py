from django.urls import path
from . import views

urlpatterns = [
    path('',views.redirect_page),
    path('time_display', views.index)
]