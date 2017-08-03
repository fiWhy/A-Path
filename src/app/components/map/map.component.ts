import { Component, OnInit } from '@angular/core';
import { MapService } from "./map.service";
import { Company } from "../../entities/company";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements OnInit {
  points: Promise<Company[]>;
  currentPoint: Company;
  constructor(private mapService: MapService) { 
    this.points = mapService.points;
    console.log(this.points);
  }

  ngOnInit() {
  }

  handlePointChanged(point: Company) {
    console.log("Resolved point", point);
  }
}
