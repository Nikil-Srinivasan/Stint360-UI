import { Routes } from '@angular/router';
import { teamAuthGuard } from 'src/app/guards/auth.guard';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

export const DepartmentRoutes: Routes = [
  {
    path: 'departments',
    component: DepartmentComponent,
    data: {
      title: 'Department Page',
    },
    canActivate: [teamAuthGuard]
  },
  {
    path: 'departments/:id',
    component: DepartmentDetailsComponent,
    data: {
      title: 'Department Details',
    },
    canActivate: [teamAuthGuard],
  },
];
