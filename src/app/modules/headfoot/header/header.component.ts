import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/myClasses/student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() hinfo!: Student;
  
  constructor() { }

  ngOnInit(): void {
  }

}
