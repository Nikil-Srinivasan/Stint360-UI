import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private _http: HttpClient) { }

  // Get all departments associated with a manager
  getAllDepartmentsAssociatedWithManager(): Observable<any> {
    return this._http.get<any>(`${environment.baseUrl}/api/Manager/GetAllDepartmentsAssociatedWithManager`);
  }

  // Get the list of managers based on provided data
  getManagersList(data: any): Observable<any> {
    return this._http.post<any>(`${environment.baseUrl}/api/Manager/GetAllManagers`, data);
  }

  // Add a new manager
  addManager(data: any): Observable<any> {
    return this._http.post(`${environment.baseUrl}/api/Auth/Register`, data);
  }

  // Appoint a new manager for a specific department by ID
  appointNewManager(id: number, data: any): Observable<any> {
    return this._http.post(`${environment.baseUrl}/api/Auth/AppointNewManager?id=${id}`, data);
  }

  // Update an existing manager by ID
  updateManager(id: number, data: any): Observable<any> {
    return this._http.put(`${environment.baseUrl}/api/Manager/UpdateManager?id=${id}`, data);
  }

  // Delete a manager by ID
  deleteManager(id: number): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/Auth/DeleteUserById?id=${id}`);
  }

  // Get employees and their manager by department ID
  getEmployeesAndManagerByDepartmentId(id: number): Observable<any> {
    return this._http.get(`${environment.baseUrl}/api/Manager/GetEmployeesAndManagerByDepartmentId?id=${id}`);
  }

  // Get employees by manager ID
  getEmployeesByManagerId(id: number): Observable<any> {
    return this._http.get(`${environment.baseUrl}/api/Employee/GetAllEmployeesByManagerId?id=${id}`);
  }
}
