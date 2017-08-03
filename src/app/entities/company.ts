export class Company {
    googleLatLng: google.maps.LatLng;
    constructor(public id: number, public lat: number, public lng: number, public title: string) {
        this.googleLatLng = window["google"]? new google.maps.LatLng(lat, lng): null;
     }
}