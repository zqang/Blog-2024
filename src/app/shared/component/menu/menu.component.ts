import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  showMenu = false;
  showInput = false;
  showDropdown = false;
  constructor(private eRef: ElementRef) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleSearch() {
    this.showInput = !this.showInput;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  closeDropdown(event: any) {
    console.log(event.target);
    // Check if the mouse left the dropdown element
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }
}
