import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../models/interface';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SinglePostsComponent } from '../single-posts/single-posts.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,    
    MatDialogModule
  ],
  providers:[PostsService],
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  public posts$: Observable<IPost[]> | undefined;
  private postsService:PostsService=inject(PostsService);
  private dialog= inject(MatDialog);

  ngOnInit(): void {
    this.posts$=this.postsService.getPosts();
  }

  openDialog(id:number) {    
    this.dialog.open(SinglePostsComponent,{
      data: id,
    });
  }



}
