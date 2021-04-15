from django.shortcuts import render, redirect
from time import strftime, gmtime
import random

# Create your views here.
def index(request):
    if 'gold_total' not in request.session:
        request.session['gold_total'] = 0
        
    if 'log' not in request.session: 
        request.session['log'] = []

    return render(request, 'index.html')

def process_money(request):
    if request.POST['selection'] == 'farm':
        earned = random.randint(10,20)
    elif request.POST['selection'] == 'cave':
        earned = random.randint(5,10)
    elif request.POST['selection'] == 'house':
        earned = random.randint(2,5)
    elif request.POST['selection'] == 'casino':
        earned = random.randint(-50,50)
    
    request.session['gold_total'] += earned
    if request.POST['selection'] == 'casino'and earned < 0:
        request.session['log'].insert(0,f"Entered a casino and lost {earned} golds... Ouch! ({strftime('%Y/%m/%d %H:%M %p', gmtime())})")
    else:
        request.session['log'].insert(0,f"Earned {earned} golds from the {request.POST['selection']}! ({strftime('%Y/%m/%d %H:%M %p', gmtime())})")

    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')