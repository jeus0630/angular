import { Component, Input, OnInit } from '@angular/core';
import { ClassInfo } from '../myClasses/classInfo';
import { Student } from '../myClasses/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() mainInfo!: Student;
  @Input() myclasses!: ClassInfo[];
  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(i: number): void{
    const div = document.querySelector(`#d${i}`) as  HTMLDivElement;
    if(div){
      div.style.display = 'block';
    }
  }
  
}
