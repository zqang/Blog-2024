import { Component } from '@angular/core';
import { FeaturedComponent } from './components/featured/featured.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, FeaturedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  featuredPosts: any[] = [
    {
      imageUrl: 'https://via.placeholder.com/350x200',
      title: 'Featured Post 1',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add your featured post data here
  ];
  currentFeaturedIndex = 0;
  popularPosts: string[] = [
    // Add your popular post data here
  ];

  ngOnInit() {
    // Initialize data or fetch posts if needed
  }

  nextFeaturedPost() {
    this.currentFeaturedIndex =
      (this.currentFeaturedIndex + 1) % this.featuredPosts.length;
  }

  prevFeaturedPost() {
    this.currentFeaturedIndex =
      (this.currentFeaturedIndex - 1 + this.featuredPosts.length) %
      this.featuredPosts.length;
  }

  swipePopularPosts(direction: 'left' | 'right') {
    // Implement logic to handle swiping of popular posts
  }
}
