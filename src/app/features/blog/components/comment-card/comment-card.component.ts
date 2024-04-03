import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { FeedbackService } from '../../../../core/services/feedback.service';
import { Comment } from '../../../../shared/model/blog.model';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css',
})
export class CommentCardComponent {
  @Input() comment: Comment = {} as Comment;
  showReplyBox: boolean = false;
  // feedbackService = inject(FeedbackService);
  router = inject(Router);
  replyValue: string = '';
  constructor() {}

  postReply() {
    this.showReplyBox = false;
    // this.feedbackService.addReply(
    //   this.comment,
    //   this.replyValue,
    //   this.comment.user.name
    // );
    this.replyValue = '';
  }

  toggleReply() {
    this.showReplyBox = !this.showReplyBox;
  }
}
