import { Component } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css',
})
export class FeaturedComponent {}
