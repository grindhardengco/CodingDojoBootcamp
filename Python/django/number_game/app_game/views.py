from django.shortcuts import render, redirect
import random

def index(request):
    if 'number' not in request.session:
        request.session['number'] = random.randint(1,100)
    return render(request, 'index.html')

def guess(request):
    request.session['guess'] = request.POST['guess']
    request.session['answer'] = ''
    if int(request.session['guess']) > request.session['number']:
        request.session['answer'] = 'high'
        return redirect('/')

    elif int(request.session['guess']) < request.session['number']:
        request.session['answer'] = 'low'
        return redirect('/')

    else:
        request.session['answer'] = 'correct'
        return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')
