import { Component } from '@angular/core';
import { PostCardComponent } from './components/post-card/post-card.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {}
