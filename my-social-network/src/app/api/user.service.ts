import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Post } from './models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  allUsers: User[] = [];
  
  constructor(private httpClient: HttpClient) {}


  getUsers() {
    console.log(this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users'))
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');;
  }

  getPosts() {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsByUserId(id: number) {
    return this.getPosts().pipe(
      map((posts) => posts.filter(post => post.userId === id))
    );
  }
  
}
