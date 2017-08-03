import { Injectable } from '@angular/core';
import { CompaniesService as GlobalCompaniesService } from "../../services/companies.service";
import companies from "../../mocks/companies";

@Injectable()
export class CompaniesService {

  constructor(private globalCompaniesService: GlobalCompaniesService) { }

  getCompanies() {
    return this.globalCompaniesService.companies;
  }

}
