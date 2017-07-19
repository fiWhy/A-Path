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

  constructor() { }

  ngOnInit() {
  }

  handlePointChanged(point) {
    this.onPointChanged.emit(point);
  }

}
