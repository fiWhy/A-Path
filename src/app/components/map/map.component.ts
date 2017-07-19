import { Component, OnInit } from '@angular/core';
import { MapService } from "./map.service";
import { Point } from "./point";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements OnInit {
  points: Promise<Point[]>;
  currentPoint: Point;
  constructor(private mapService: MapService) { 
    this.points = mapService.points;
    console.log(this.points);
  }

  ngOnInit() {
  }

  handlePointChanged(point: Point) {
    console.log("Resolved point", point);
  }
}
