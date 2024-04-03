import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [NgIconComponent, RouterModule, UserCardComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);

  onNavigate(id: number) {
    this.router.navigate([id.toString()], { relativeTo: this.route });
  }
}
