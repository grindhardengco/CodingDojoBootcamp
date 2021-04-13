from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

# Create your views here.
def index(request):
    return HttpResponse("placeholder to later display a list of archived Yo Momma jokes.")

def root(request):
    return redirect("/blogs")

def new(request):
    return HttpResponse("placeholder for input of a new Yo Momma joke")

def create(request):
    return redirect("/")

def show(request, number):
    return HttpResponse(f"placeholder for Yo Momma joke number: {number}.")

def edit(request, number):
    return HttpResponse(f"placeholder to edit Yo Momma joke number: {number}.")

def destroy(request, number):
    return redirect("/blogs") 

def json_message(request):
    return JsonResponse({"response": "JSON response from json_message", "status":True})