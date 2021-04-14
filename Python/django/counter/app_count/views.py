from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    
    if 'count' not in request.session:
        request.session['count'] = 0

    request.session['count'] += 1

    return render(request, 'index.html')

def destroy_session(request):
    request.session.clear()
    return redirect('/')