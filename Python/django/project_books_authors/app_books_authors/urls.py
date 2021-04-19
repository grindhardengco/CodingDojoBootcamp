from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('authors', views.list_authors),
    path('add_book', views.add_book),
    path('books/<int:book_id>', views.book_detail),
    path('add_author', views.add_author),
    path('assign_author/<int:book_id>', views.assign_author),
    path('assign_book/<int:author_id>', views.assign_book),
    path('authors/<int:author_id>',views.author_detail),
    # path('assign_book', views.assign_book),
]