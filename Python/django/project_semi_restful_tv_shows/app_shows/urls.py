from django.urls import path
from . import views

urlpatterns = [
    path('shows', views.index),
    path('shows/<int:show_id>', views.detail),
    path('shows/<int:show_id>/edit', views.edit),
    path('shows/<int:show_id>/process_edit', views.process_edit),
    path('shows/<int:show_id>/destroy', views.destroy),
    path('shows/new', views.new),
    path('shows/process_new', views.process_new),
    path('', views.home),
]