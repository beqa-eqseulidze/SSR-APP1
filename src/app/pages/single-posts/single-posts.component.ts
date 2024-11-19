import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from '../../models/interface';
import { PostsService } from '../../services/posts.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-single-posts',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  providers:[PostsService],
  templateUrl: './single-posts.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SinglePostsComponent {

  public post$: Observable<IPost> | undefined;
  private postsService:PostsService=inject(PostsService);
  public data=inject(MAT_DIALOG_DATA) ;
  public dialogRef=inject(DialogRef) ;

  ngOnInit(): void {    
    this.post$=this.postsService.getPost(this.data);
  }  
}