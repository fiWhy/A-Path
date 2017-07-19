export class Point {
    googleLatLng: google.maps.LatLng;
    constructor(public lat: number, public lng: number, public title: string) {
        this.googleLatLng = new google.maps.LatLng(lat, lng);
     }
}