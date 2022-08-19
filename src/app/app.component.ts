import { Component } from '@angular/core';
import { MYCLASSES } from 'src/assets/data/myClasses';
import { ClassInfo } from './myClasses/classInfo';
import {Student} from './myClasses/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'thirdApp';
  bio: Student={sid: 991000000,sname: "Jewoo",scampus: "Davis",slogin:"cadgeran"};
  myclasses: ClassInfo[] = MYCLASSES;
}
