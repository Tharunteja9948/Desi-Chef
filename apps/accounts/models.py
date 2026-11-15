"""
User profile and preferences models for AI Chef.
"""

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserProfile(models.Model):
    DIETARY_CHOICES = [
        ('all', 'No Restrictions'),
        ('veg', 'Pure Vegetarian'),
        ('nonveg', 'Non-Vegetarian'),
        ('vegan', 'Vegan'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    dietary_preference = models.CharField(max_length=20, choices=DIETARY_CHOICES, default='all')
    favorite_cuisine = models.CharField(max_length=100, default='All Indian Cuisines')
    bio = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Profile for {self.user.username}"

@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    else:
        if hasattr(instance, 'profile'):
            instance.profile.save()
