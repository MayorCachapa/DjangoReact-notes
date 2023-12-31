from django.db import models

# Create your models here.
class Note(models.Model):
    title = models.TextField(null=True, blank=True)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title