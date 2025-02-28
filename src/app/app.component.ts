import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListcomponetComponent } from './listcomponet/listcomponet.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListcomponetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';
  times: number = 0;
  h2: string = "";
  hide: boolean = true;

  onClick() {
    this.times = this.times + 1;
  }

  onDblClick() {
    this.hide = !this.hide;
  }
}

