from rest_framework.decorators import api_view
from django.http import JsonResponse
import json
import environ
import requests

env = environ.Env()
environ.Env.read_env()

ipstack_key = env("IPSTACK_KEY")
weatherstack_key = env("WEATHERSTACK_KEY")


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    
    return ip


def get_location(request):
    client_ip = get_client_ip(request)

    api_url = f'http://api.ipstack.com/{client_ip}?access_key={ipstack_key}'

    try:
        response = requests.get(api_url)
        location = response.json()

        data = {
            'ip' : client_ip,
            'city': location.get('city'),
            'region': location.get('region_name'),
            'country': location.get('country'),
            'latitude': location.get('latitude'),
            'longitude': location.get('longitude'),
        }
        
        return data
    except Exception as e:
        err = {"error": "Error retrieving location data", "details": str(e)}
        return err


@api_view(["GET"])
def home(request):
    location_data = get_location(request)
    api_url = f'http://api.weatherstack.com/current?access_key={weatherstack_key}'
    query_params = {"query": "New York"}
    if location_data:
        query_params['query'] =  f'{location_data['city']},{location_data['country']}'
    print(query_params)
    try:
        response = requests.get(api_url, params=query_params)
        weather_data = response.json()
        
        return JsonResponse(weather_data)
    
    except Exception as e:
        return JsonResponse({'error': 'Error retrieving weather data', 'details': str(e)})


