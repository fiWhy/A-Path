import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from "../../../entities/company";

@Component({
  selector: 'app-point-navigation',
  templateUrl: './point-navigation.component.html',
  styleUrls: ['./point-navigation.component.scss']
})
export class PointNavigationComponent implements OnInit {
  @Input() points: Company[] = [];
  @Output() onPointChanged = new EventEmitter();
  @Input() selectedPoint: Company;
  @Output() selectedPointChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handlePointChanged(point) {
    this.selectedPoint = new Company(point.lat, point.lng, point.title);
    this.selectedPointChange.emit(this.selectedPoint);
    this.onPointChanged.emit(this.selectedPoint);
  }

}
