import { Component, OnInit } from '@angular/core';
import { CompaniesService } from "./services/companies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.companiesService.loadCompanies();
  }
}
