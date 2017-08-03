import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompaniesService } from "./companies.service";
import { Company } from "../../entities/company";
import { companyNamePrefixValidator } from "./validators/company-name-prefix.validator";
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompaniesService]
})
export class CompaniesComponent implements OnInit {
  companyForm: FormGroup;
  companies: Promise<Company[]>;
  company: Company;
  constructor(private companiesService: CompaniesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.company = new Company(null, null, null, "")
    this.buildForm()
    this.companies = this.companiesService.getCompanies();
  }

  buildForm() {
    this.companyForm = this.fb.group({
      name: [this.company.title, [
        Validators.required,
        companyNamePrefixValidator("company-")
      ]],
      lat: [this.company.lat],
      lng: [this.company.lng],
    })
  }

  resetCompany() {
    this.companyForm.reset();
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
