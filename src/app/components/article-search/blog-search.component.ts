import { Component, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";
import { Post } from "../../models/post"
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { BlogService } from '../../services/blog.service';

@Component({
  selector: "app-blog-search",
  templateUrl: "./blog-search.component.html",
  styleUrls: ["./blog-search.component.scss"]
})
export class BlogSearchComponent implements OnInit {
  posts$: Observable<Post[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void{
    this.searchTerms.next(term);
  }

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.blogService.searchPost(term))
    )
  }
}

@Component({selector: 'app-blog-search', template: ''})
export class BlogSearchComponentStub{
}