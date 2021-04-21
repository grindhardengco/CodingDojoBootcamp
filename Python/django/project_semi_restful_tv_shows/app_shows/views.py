from django.shortcuts import render, redirect
from .models import Show
from django.contrib import messages

def index(request):
    context = {
        "all_shows": Show.objects.all(),
    }

    return render(request, 'index.html', context)

def detail(request, show_id):
    context = {
        "show": Show.objects.get(id=show_id),
    }
    return render(request, 'detail.html', context)

def edit(request, show_id):
    context = {
        "show": Show.objects.get(id=show_id),
    }
    return render(request, 'edit.html', context)

def process_edit(request, show_id):
    errors = Show.objects.show_validator(request.POST)
    if errors:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect(f'/shows/{show_id}/edit')

    show = Show.objects.get(id=show_id)
    show.title=request.POST['title']
    show.network=request.POST['network']
    show.release_date=request.POST['release_date']
    show.desc=request.POST['desc']
    show.save()
    return redirect(f'/shows/{show_id}')

def destroy(request, show_id):
    Show.objects.get(id=show_id).delete()
    return redirect('/shows')

def new(request):
    return render(request, 'new.html')
    
def process_new(request):
    errors = Show.objects.show_validator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/shows/new')
    else:
        Show.objects.create(
            title = request.POST['title'],
            network = request.POST['network'],
            release_date = request.POST['release_date'],
            desc = request.POST['desc'],
        )
        book_id = Show.objects.last().id
        return redirect(f'/shows/{book_id}')

def home(request):
    return redirect('/shows')