import { Component, Input } from '@angular/core';
import { Post, User } from '../api/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  @Input() user: User;
  @Input() posts: Post[] = [];

  
  // ActivatedRoute - resolver function in app-routing.module.ts
  constructor (private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data["user"];
    this.posts = this.activatedRoute.snapshot.data["posts"];
  }
  
}
