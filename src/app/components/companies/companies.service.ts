import { Injectable } from '@angular/core';
import { CompaniesService as GlobalCompaniesService } from "../../services/companies.service";
import { Company } from "../../entities/company";
import companies from "../../mocks/companies";

@Injectable()
export class CompaniesService {

  constructor(private globalCompaniesService: GlobalCompaniesService) { }

  getCompanies(): Promise<Company[]> {
    return this.globalCompaniesService.companies;
  }

  removeCompany(company: Company) {
    this.globalCompaniesService.removeCompany(company);
  }

}
