import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// here, put all methods that you need for provide technician
// like create, update, query or delete.
@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  // With HttpClient, you can use http methods like post, put, delete and get.
  constructor(private readonly http: HttpClient) { }

}
