# Generated by Django 3.1.7 on 2021-04-17 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_books_authors', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='notes',
            field=models.TextField(default=''),
        ),
    ]
