from django.shortcuts import render

from rest_framework import viewsets
from .models import Joueur
from .serializers import JoueurSerializer

class JoueurViewSet(viewsets.ModelViewSet):
    queryset = Joueur.objects.all()
    serializer_class = JoueurSerializer
    
    def get_queryset(self):
        queryset = Joueur.objects.all()
        nom = self.request.query_params.get('nom', None)
        pays = self.request.query_params.get('pays', None)
        if nom:
            queryset = queryset.filter(nom__icontains=nom)
        if pays:
            queryset = queryset.filter(pays__icontains=pays)
        return queryset
