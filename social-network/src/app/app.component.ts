import { Component } from '@angular/core';
import { UserService } from './api/user.service';
import { map, switchMap } from 'rxjs/operators';
import { IPost } from './api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'social-network';

  //* OPTION 3
  user$ = this.userService.getUsers().pipe(
    map((users) => users[3])
  );

  posts$ = this.user$.pipe(
    switchMap((user) => this.userService.getPostsByUserId(user.id))
  );

  constructor(private userService: UserService) {}



  //* OPTION 2
  // user$ = this.userService.getUsers().pipe(
  //   map((users) => users[3])
  // );

  // posts: IPost[] = [];

  // ngOnInit() {
  //   this.userService.getUsers()
  //   .pipe(
  //     switchMap(users => this.userService.getPostsByUserId(users[3].id)
  //     )
  //   )
  //   .subscribe(posts => {
  //     this.posts = posts;
  //   })
  // }

  // constructor(private userService: UserService) {}



  //* OPTION 1
  // user$ = this.userService.getUsers().pipe(
  //   map((users) => users[3])
  // );

  // posts: IPost[] = [];

  // ngOnInit() {
  //   this.userService.getUsers()
  //     .subscribe(users => {
  //       this.userService.getPosts().subscribe(posts => {
  //         this.posts = posts.filter(post => post.userId === users[3].id);
  //       })
  //     })
  // }

  // constructor(private userService: UserService) {}
  
}
