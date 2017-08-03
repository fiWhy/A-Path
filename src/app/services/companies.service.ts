import { Injectable } from '@angular/core';
import companies from "../mocks/companies";
import { Company } from "../entities/company";

@Injectable()
export class CompaniesService {

  constructor() { }

  get companies(): Company[] {
    return companies.map((point: any) => {
      return new Company(point.lat, point.lng, point.title);
    });
  }

}
