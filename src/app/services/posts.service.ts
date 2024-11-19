import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

 public getPosts():Observable <IPost[]>{
  return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
 }

 public getPost(id:number):Observable <IPost>{
  return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
 }
}
