import requests

API_KEY = "32f0ed43e1msh875289b62e3bc5fp1ac5a0jsn403e0ea18767"
BASE_URL = "https://free-api-live-football-data.p.rapidapi.com"

headers = {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com"
}

response = requests.get(
    BASE_URL + "/football-get-all-leagues",
    headers=headers
)

print(response.json())