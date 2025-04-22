import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crud-operations',
  imports: [RouterOutlet],
  templateUrl: './crud-operations.component.html',
  styleUrl: './crud-operations.component.css'
})
export class CrudOPerationsComponent {
   title = 'contact_Management';
}
