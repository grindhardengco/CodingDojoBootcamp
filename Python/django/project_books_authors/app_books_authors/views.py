from django.shortcuts import render, redirect
from .models import Book, Author

def index(request):
    context = {
        "all_books": Book.objects.all(),
        "all_authors": Author.objects.all(),
    }
    return render(request, 'index.html', context)

def list_authors(request):
    context = {
        "all_books": Book.objects.all(),
        "all_authors": Author.objects.all(),
    }
    return render(request, 'list_authors.html', context)

def add_book(request):
    Book.objects.create(
        title = request.POST['title'],
        desc = request.POST['desc']
    )
    return redirect('/')

def add_author(request):
    Author.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        notes = request.POST['notes'],
    )
    return redirect('/authors')

def book_detail(request, book_id):
    context = {
        "book": Book.objects.get(id= book_id),
        "authors": Book.objects.get(id= book_id).authors.all(),
        "all_authors": Author.objects.all(),
    }
    return render(request, "book_detail.html", context)

def author_detail(request, author_id):
    context = {
        "author": Author.objects.get(id= author_id),
        "books": Author.objects.get(id= author_id).book.all(),
        "all_books": Book.objects.all(),
    }
    return render(request, "author_detail.html", context)

def assign_book(request, author_id):
    Author.objects.get(id= author_id).book.add(Book.objects.get(id= request.POST['book_id'])),
    return redirect(f'/authors/{author_id}')

def assign_author(request, book_id):
    Book.objects.get(id= book_id).authors.add(Author.objects.get(id= request.POST['author_id'])),
    return redirect(f'/books/{book_id}')