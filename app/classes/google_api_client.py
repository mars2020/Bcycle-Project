import requests
from urllib.parse import urlencode

class GoogleApiClient(object):

    lat = None
    lng = None
    api_key = None
    address = None
    data_type = 'json'
    reformatted_data = ""

    def __init__(self,api_key=None,address=None):
        self.api_key = api_key

        if self.api_key is None:
            Exception("GOOGLE API KEY is missing")

        self.address = address

        if self.address is not None:
            self.extract_lat_lng()
            #self.reformatting()

    def extract_lat_lng(self):
        endpoint = f"https://maps.googleapis.com/maps/api/geocode/{self.data_type}"
        params = {"address":self.address,"key":self.api_key}
        url_params = urlencode(params)
        url = f"{endpoint}?{url_params}"
        r = requests.get(url)
        if r.status_code not in range(200,299):
            return {}
        latlng = {}
        try:
            latlng = r.json()['results'][0]['geometry']['location']
        except:
            pass
        lat,lng = latlng.get('lat'),latlng.get('lng')
        self.lat = lat
        self.lng = lng
        return lat,lng

    #def reformatting(self):
    #   self.reformatted_data = f"new google.maps.LatLng({self.lat},{self.lng})"