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
  company: Company;
  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.company = new Company(null, null, "");
    this.companies = this.companiesService.getCompanies();
  }

  removeCompany(company: Company) {
    this.companiesService.removeCompany(company);
  }

  onSubmit() {
    this.companiesService.addCompany(this.company);
  }

}
