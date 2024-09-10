import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

}
