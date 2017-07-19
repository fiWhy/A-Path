import { Component, OnInit, Input } from '@angular/core';
import { Point } from "./point";
import software from "./points";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  softwareCompanies: Set<Point> = <any>software;
  currentPoint: Point;
  constructor() { }

  ngOnInit() {
  }

  handlePointChanged(point: Point) {
    console.log("Resolved point", this.currentPoint);
  }

  get currentPositionLatLng() {
    return [this.currentPoint.lat, this.currentPoint.lng];
  }
}
