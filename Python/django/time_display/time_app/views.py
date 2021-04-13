from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime

# Create your views here.
def index(request):
    context = {
        "date": strftime("%b %d, %Y", gmtime()),
        "time": strftime("%H:%M %p", gmtime())
    }
    # months = [1,'Jan',2,'Feb',3,'Mar',4,'Apr',5,'May',6,'Jun',7,'Jul',8,'Aug',9,'Sep',10,'Oct',11,'Nov',12,'Dec']
    # month = ''
    # for i in range (0,len(months)):
    #     if months[i] == int(strftime("%m", gmtime())):
    #         month = months[i+1]
    return render (request, 'index.html', context)

def redirect_page(request):
    return redirect('/time_display')