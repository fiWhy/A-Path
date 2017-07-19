import { Component, OnInit } from '@angular/core';
import { Point } from "./point";
import software from "./points";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private softwareCompanies: Set<Point> = software;
  constructor() { }

  ngOnInit() {
  }

}
