from django.db import models

class ShowManager(models.Manager):
    def show_validator(self, post_data):
        errors={}
        if len(post_data['title']) < 2:
            errors["title"] = "The length of the title must be 2 characters or more."
        if len(post_data['network']) < 3:
            errors["network"] = "The length of the network must be 3 characters or more."
        if len(post_data['desc']) > 0 and len(post_data['desc']) < 10:
            errors["desc"] = "Length of description must be 10 characters or more."
        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()