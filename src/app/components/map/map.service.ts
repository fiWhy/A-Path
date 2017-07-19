import { Injectable } from '@angular/core';
import { Point } from "./point";
import software from "./points";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/Observable/from";
import { NgMapApiLoader } from '@ngui/map';
@Injectable()
export class MapService {

  constructor(private mapsApiLoader: NgMapApiLoader) { }

  get points(): Promise<Point[]> {
    return new Promise((resolve, reject) => {
      this.mapsApiLoader.api$.subscribe(() => {
        const array = <any>Array.from(software).map((point: any) => {
          return new Point(point.lat, point.lng, point.title);
        });
        resolve(array);
      })
    })
  }
}
