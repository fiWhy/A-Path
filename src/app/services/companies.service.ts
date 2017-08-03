import { Injectable } from '@angular/core';
import companies from "../mocks/companies";
import { Company } from "../entities/company";
import { NgMapApiLoader } from '@ngui/map';


@Injectable()
export class CompaniesService {
  private _companies: Company[];
  constructor(private mapsApiLoader: NgMapApiLoader) { }

  loadCompanies() {
    return new Promise((resolve, reject) => {
      this._companies = companies.map((point: any) => {
        return new Company(point.lat, point.lng, point.title);
      });
      resolve(this._companies);
    })
  }
  
  get companies(): Promise<Company[]> {
    return Promise.resolve(this._companies);
  }

  set company(company: Company) {
    this._companies.push(company);
  }

  removeCompany(company: Company) {
    this._companies.splice(this._companies.indexOf(company), 1);
  }

}
