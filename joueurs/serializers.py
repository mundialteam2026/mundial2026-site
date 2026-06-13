from rest_framework import serializers
from .models import Joueur

class JoueurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Joueur
        fields = '__all__'