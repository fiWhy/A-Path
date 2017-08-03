import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompaniesService } from "./companies.service";
import { Company } from "../../entities/company";
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompaniesService]
})
export class CompaniesComponent implements OnInit {
  @ViewChild("companyForm") companyForm: NgForm;
  companies: Promise<Company[]>;
  company: Company;
  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.resetCompany();
    this.companies = this.companiesService.getCompanies();
  }

  resetCompany() {
    this.companyForm.resetForm();
    this.company = new Company(null, null, null, "")
  }

  removeCompany(company: Company) {
    this.companiesService.removeCompany(company);
  }

  setCompany(company: Company) {
    this.company = new Company(company.id, company.lat, company.lng, company.title);
  }

  onSubmit() {
    this.companiesService.addCompany(this.company);
    this.resetCompany();
  }

}
