import requests
import django
import os
import time

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from joueurs.models import Joueur

API_KEY = "32f0ed43e1msh875289b62e3bc5fp1ac5a0jsn403e0ea18767"
BASE_URL = "https://free-api-live-football-data.p.rapidapi.com"

headers = {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com"
}

tous_les_joueurs = [
    # France
    "Kylian Mbappe", "Antoine Griezmann", "Olivier Giroud", "Marcus Thuram",
    # Espagne
    "Pedri", "Gavi", "Ferran Torres", "Alvaro Morata",
    # Angleterre
    "Jude Bellingham", "Harry Kane", "Bukayo Saka", "Phil Foden",
    # Allemagne
    "Jamal Musiala", "Florian Wirtz", "Kai Havertz", "Thomas Muller",
    # Brésil
    "Vinicius Junior", "Rodrygo", "Raphinha", "Neymar",
    # Argentine
    "Lionel Messi", "Julian Alvarez", "Angel Di Maria", "Lautaro Martinez",
    # Portugal
    "Cristiano Ronaldo", "Bruno Fernandes", "Bernardo Silva", "Joao Felix",
    # Pays-Bas
    "Virgil van Dijk", "Memphis Depay", "Frenkie de Jong", "Cody Gakpo",
    # Belgique
    "Kevin De Bruyne", "Romelu Lukaku", "Thibaut Courtois", "Yannick Carrasco",
    # Italie
    "Federico Chiesa", "Nicolo Barella", "Lorenzo Pellegrini", "Gianluigi Donnarumma",
    # Croatie
    "Luka Modric", "Ivan Perisic", "Mateo Kovacic",
    # Danemark
    "Christian Eriksen", "Pierre-Emile Hojbjerg",
    # USA
    "Christian Pulisic", "Tyler Adams", "Weston McKennie",
    # Mexique
    "Hirving Lozano", "Raul Jimenez", "Edson Alvarez",
    # Canada
    "Alphonso Davies", "Jonathan David", "Tajon Buchanan",
    # Maroc
    "Achraf Hakimi", "Hakim Ziyech", "Youssef En-Nesyri", "Sofyan Amrabat",
    # Senegal
    "Sadio Mane", "Edouard Mendy", "Kalidou Koulibaly", "Ismaila Sarr",
    # Nigeria
    "Victor Osimhen", "Wilfried Ndidi", "Alex Iwobi",
    # Cameroun
    "Andre Onana", "Vincent Aboubakar", "Eric Maxim Choupo-Moting",
    # Ghana
    "Thomas Partey", "Mohammed Kudus", "Jordan Ayew",
    # Cote d Ivoire
    "Sebastien Haller", "Nicolas Pepe", "Wilfried Zaha", "Franck Kessie",
    # Guinee
    "Serhou Guirassy", "Naby Keita",
    # Algerie
    "Riyad Mahrez", "Islam Slimani",
    # Egypte
    "Mohamed Salah", "Mohamed Elneny",
    # Tunisie
    "Wahbi Khazri", "Youssef Msakni",
    # Japon
    "Takumi Minamino", "Wataru Endo", "Daichi Kamada",
    # Coree du Sud
    "Son Heung-min", "Hwang Hee-chan",
    # Australie
    "Mat Ryan", "Aaron Mooy",
    # Arabie Saoudite
    "Salem Al-Dawsari", "Mohammed Al-Owais",
]

print(f"Importation de {len(tous_les_joueurs)} joueurs...")

for nom in tous_les_joueurs:
    print(f"Recherche de {nom}...")
    try:
        response = requests.get(
            BASE_URL + "/football-players-search?search=" + nom,
            headers=headers
        )
        data = response.json()
        
        if data.get('status') == 'success':
            suggestions = data['response']['suggestions']
            if suggestions:
                joueur_api = suggestions[0]
                joueur, created = Joueur.objects.get_or_create(
                    nom=joueur_api['name'],
                    defaults={
                        'pays': '',
                        'poste': '',
                        'equipe': joueur_api.get('teamName', ''),
                        'buts': 0,
                        'passes': 0,
                        'cartons_jaunes': 0,
                        'cartons_rouges': 0,
                        'minutes_jouees': 0,
                    }
                )
                if created:
                    print(f"✓ {joueur_api['name']} ajouté !")
                else:
                    print(f"- {joueur_api['name']} existe déjà")
        time.sleep(0.5)
    except Exception as e:
        print(f"Erreur pour {nom}: {e}")

print("Terminé !")