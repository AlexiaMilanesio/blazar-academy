import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IPost } from './models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }

  getPosts() {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsByUserId(id: number) {
    return this.getPosts().pipe(
      map((posts) => posts.filter(post => post.userId === id))
    )
  }
  
}
