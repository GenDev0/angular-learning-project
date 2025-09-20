import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  greeting = 'Hello from GreetingComponent!';
  // Get message from parent component
  message = input('Default message from GreetingComponent');
}
