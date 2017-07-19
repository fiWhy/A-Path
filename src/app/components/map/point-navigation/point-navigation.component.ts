import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Point } from "../point";

@Component({
  selector: 'app-point-navigation',
  templateUrl: './point-navigation.component.html',
  styleUrls: ['./point-navigation.component.scss']
})
export class PointNavigationComponent implements OnInit {
  @Input() points: Point[] = [];
  @Output() onPointChanged = new EventEmitter();
  @Input() selectedPoint: Point;
  @Output() selectedPointChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handlePointChanged(point) {
    this.selectedPoint = new Point(point.lat, point.lng, point.title);
    this.selectedPointChange.emit(this.selectedPoint);
    this.onPointChanged.emit(this.selectedPoint);
  }

}
