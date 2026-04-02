from django.db import models

class UserProfile(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    name      = models.CharField(max_length=100)
    username  = models.CharField(max_length=50, unique=True)
    password  = models.CharField(max_length=128)
    age       = models.PositiveIntegerField()
    gender    = models.CharField(max_length=1, choices=GENDER_CHOICES)
    email     = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} (@{self.username})"

    class Meta:
        ordering = ['-created_at']
