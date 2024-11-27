// import { Component, OnInit, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IPost } from '../../models/interface';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SinglePostsComponent } from '../single-posts/single-posts.component';
import { Component, Injector, OnInit, afterNextRender, inject } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [PostsService],
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  public posts$: Observable<IPost[]> | undefined;
  private postsService: PostsService = inject(PostsService);
  private dialog = inject(MatDialog);
  private readonly injector = inject(Injector);
  constructor() {
    // afterNextRender(() => {
    //   console.log("hello my friend!");
    //   localStorage.setItem('test', 'content for test')
    //   });   
      
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();

      afterNextRender(() => {
      console.log("hello my friend!");
      localStorage.setItem('test', 'content for test')
      },
      { injector: this.injector }
      )  
  }   
  


  openDialog(id: number) {
    this.dialog.open(SinglePostsComponent, {
      data: id,
    });
  }



}
