import { Component, OnInit } from '@angular/core';
import { Point } from "./point";
import software from "./points";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  softwareCompanies: Set<Point> = software;
  constructor() { }

  ngOnInit() {
  }

  handlePointChanged(point: Point) {
    console.log("Resolved point", point);
  }
}
