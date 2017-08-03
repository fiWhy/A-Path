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
        return new Company(point.id, point.lat, point.lng, point.title);
      });
      resolve(this._companies);
    })
  }

  generateCompany(company: Company) {
    const id = company.id ? company.id : this._companies[this._companies.length - 1].id + 1;
    return new Company(id, company.lat, company.lng, company.title)
  }

  get companies(): Promise<Company[]> {
    return Promise.resolve(this._companies);
  }

  set company(company: Company) {
    const foundCompany = company.id && this._companies.find(cc => cc.id === company.id);
    if (!foundCompany) {
      this._companies.push(this.generateCompany(company));
    } else {
      this._companies[this._companies.indexOf(foundCompany)] = this.generateCompany(company);
    }
  }

  removeCompany(company: Company) {
    this._companies.splice(this._companies.indexOf(company), 1);
  }

}
