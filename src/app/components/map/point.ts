export class Point {
    constructor(public lat: number, public lng: number, public title: string) { }

    get latLng() {
        console.log("Hi");
        return [this.lat, this.lng];
    }
}