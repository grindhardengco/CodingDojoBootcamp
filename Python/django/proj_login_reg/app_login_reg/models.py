from django.db import models
import re

class UserManager(models.Manager):
    def user_validator(self, post_data):
        errors = {}
       
        f_name_regex = re.compile(r'^[a-zA-Z]{2,}$')
        if not f_name_regex.match(post_data['first_name']):
            errors['first_name'] = "First name must be all letters and more than 2 characters."

        l_name_regex = re.compile(r'^[a-zA-Z]{2,}$')
        if not l_name_regex.match(post_data['last_name']):
            errors['last_name'] = "Last name must be all letters and more than 2 characters."
        
        try:
            User.objects.get(email = post_data['email'])
            errors['email_unique'] = "This email address is already in use."
        except:
            pass

        email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not email_regex.match(post_data['email']):
            errors['email'] = "Email address format must be correct."

        if len(post_data['password']) < 8:
            errors['password_length'] = "Password must be 8 characters or more."

        if post_data['password'] != post_data['confirm_pw']:
            errors['password_confirm'] = "Password does not match password confirmation."

        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=60)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()