from django.db import models

class Joueur(models.Model):
    nom = models.CharField(max_length=100)
    pays = models.CharField(max_length=100)
    poste = models.CharField(max_length=50)
    equipe = models.CharField(max_length=100)
    buts = models.IntegerField(default=0)
    passes = models.IntegerField(default=0)
    cartons_jaunes = models.IntegerField(default=0)
    cartons_rouges = models.IntegerField(default=0)
    minutes_jouees = models.IntegerField(default=0)
    photo = models.URLField(blank=True)

    def __str__(self):
        return self.nom
