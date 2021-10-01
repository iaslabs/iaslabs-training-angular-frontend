import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent implements OnInit {

  // here, you can use for inject dependecys.
  // sintax = constructor(private readonly nameDependency: NameDependency)
  constructor() { }

  ngOnInit(): void {
  }

}
