import { Component, OnInit } from '@angular/core';
import { CompaniesService } from "./companies.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompaniesService]
})
export class CompaniesComponent implements OnInit {

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
  }

}
