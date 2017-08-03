import { Injectable } from '@angular/core';
import { CompaniesService } from "../../services/companies.service";
import { Company } from "../../entities/company";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/Observable/from";
import { NgMapApiLoader } from '@ngui/map';
@Injectable()
export class MapService {

  constructor(private companiesService: CompaniesService, private mapsApiLoader: NgMapApiLoader) { }

  get points(): Promise<Company[]> {
    return new Promise((resolve, reject) => {
      this.mapsApiLoader.api$.subscribe(() => {
        resolve(this.companiesService.companies);
      })
    })
  }
}
