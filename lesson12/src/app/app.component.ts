import {Component} from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appTitle = 'TodoList';

  public todos: Todo[] = [
    {id: 1, title: ' task', completed: false, date: new Date()},
    {id: 2, title: ' shopping', completed: true, date: new Date()},
    {id: 3, title: ' meeting', completed: false, date: new Date()},
  ];

  onToggle(id: number) {
    console.log(id); // Продемонстрировать возможность подписки на изменения компонентов выводом соответствующего текста в консоль.
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed
  }
}
