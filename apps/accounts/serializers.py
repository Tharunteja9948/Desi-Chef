"""
Serializers for User Authentication and Profile.
"""

from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from apps.accounts.models import UserProfile

class UserSummarySerializer(serializers.ModelSerializer):
    dietary_preference = serializers.CharField(source='profile.dietary_preference', read_only=True)
    favorite_cuisine = serializers.CharField(source='profile.favorite_cuisine', read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'dietary_preference', 'favorite_cuisine']

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    dietary_preference = serializers.CharField(required=False, default='all')
    favorite_cuisine = serializers.CharField(required=False, default='All Indian Cuisines')

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'dietary_preference', 'favorite_cuisine']

    def create(self, validated_data):
        diet = validated_data.pop('dietary_preference', 'all')
        cuisine = validated_data.pop('favorite_cuisine', 'All Indian Cuisines')
        user = User.objects.create_user(**validated_data)
        
        # Profile is created via signal, update preferences
        if hasattr(user, 'profile'):
            user.profile.dietary_preference = diet
            user.profile.favorite_cuisine = cuisine
            user.profile.save()
        return user

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(username=data.get('username'), password=data.get('password'))
        if not user:
            raise serializers.ValidationError("Invalid credentials provided.")
        if not user.is_active:
            raise serializers.ValidationError("User account is inactive.")
        data['user'] = user
        return data

class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'dietary_preference', 'favorite_cuisine', 'bio', 'updated_at']
