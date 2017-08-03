import { Injectable } from '@angular/core';
import { CompaniesService } from "../../services/companies.service";
import { Company } from "../../entities/company";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/Observable/from";
@Injectable()
export class MapService {

  constructor(private companiesService: CompaniesService) { }

  get points(): Promise<Company[]> {
    return this.companiesService.companies;
  }
}
