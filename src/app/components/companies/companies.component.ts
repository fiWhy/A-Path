import { Component, OnInit } from '@angular/core';
import { CompaniesService } from "./companies.service";
import { Company } from "../../entities/company";
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompaniesService]
})
export class CompaniesComponent implements OnInit {
  companies: Promise<Company[]>;
  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.companies = this.companiesService.getCompanies();
  }

  removeCompany(company: Company) {
    this.companiesService.removeCompany(company);
  }

}
