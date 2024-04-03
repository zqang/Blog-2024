import { Component } from '@angular/core';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { NgIconComponent } from '@ng-icons/core';
import { Comment } from '../../../shared/model/blog.model';
import { CommentCardComponent } from '../components/comment-card/comment-card.component';
import { ReplyCardComponent } from '../components/reply-card/reply-card.component';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    UserCardComponent,
    NgIconComponent,
    CommentCardComponent,
    ReplyCardComponent,
    FormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  comment: string = '';
  comments: Comment[] = [
    {
      id: 1,
      content:
        'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
      user: {
        image: './assets/user-images/image-suzanne.jpg',
        name: 'Suzanne Chang',
        username: 'upbeat1811',
      },
      replies: [],
    },
    {
      id: 2,
      content:
        'Please use fun, color-coded labels to easily identify them at a glance',
      user: {
        image: './assets/user-images/image-thomas.jpg',
        name: 'Thomas Hood',
        username: 'brawnybrave',
      },
      replies: [],
    },
  ];

  postComment() {
    // this.feedbackService.addComment(this.comment, this.feedback!);
    this.comment = '';
  }
}
