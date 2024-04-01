import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  showMenu = false;
  showInput = false;
  showDropdown = false;
  showMobileSearchBar = true;
  constructor(private eRef: ElementRef) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleSearch() {
    this.showInput = !this.showInput;
  }

  showMobileSearch(event: FocusEvent) {
    this.showMobileSearchBar = false;
  }

  hideMobileSearch(event: FocusEvent) {
    this.showMobileSearchBar = true;
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
