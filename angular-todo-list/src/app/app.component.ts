import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'To-Do List';
  filter: 'all' | 'todo' | 'completed' = 'all';

  allItems = [
    { description: 'study', completed: true },
    { description: 'code', completed: false },
    { description: 'got to the gym', completed: true },
    { description: 'eat pizza', completed: true },
    { description: 'drink wine', completed: false },
    { description: 'sleep', completed: false },
  ];

  get items() {
    if (this.filter === 'all') return this.allItems;
    return this.allItems.filter((item) =>
      this.filter === 'completed' ? item.completed : !item.completed
    );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      completed: false,
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
