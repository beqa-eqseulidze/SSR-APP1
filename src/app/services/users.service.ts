import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, IUser } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

 public getUsers():Observable <IUser[]>{
  return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
 }

 public getUser(id:number):Observable <IUser>{
  return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
 }
}
