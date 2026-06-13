import requests
import django
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from joueurs.models import Joueur

API_KEY = "96cb3f8f47431e0a7097fb0847d023d2"
BASE_URL = "https://api-football-v1.p.rapidapi.com/v3"

headers = {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
}

# ID de la Coupe du Monde 2026
WORLD_CUP_ID = 1

# Récupérer les équipes qualifiées
response = requests.get(
    BASE_URL + "/teams",
    headers=headers,
    params={"league": WORLD_CUP_ID, "season": 2026}
)

data = response.json()
print(data)