import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit, OnChanges, OnDestroy {
  name: string = 'Pavan';
  email: string = '';
  imagePath: string = 'https://www.sharpquest.com/media/1654/angular-best-practice-image.png';
  isDisabled: boolean = false;
  emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'; // Email validation regex

  constructor() {}

  ngOnInit(): void {
    console.log("Component Initialized");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected:', changes);
  }

  ngOnDestroy(): void {
    console.log("Component Destroyed");
  }

  updateEmail(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  isEmailValid(): boolean {
    const regex = new RegExp(this.emailPattern);
    return regex.test(this.email);
  }
}
