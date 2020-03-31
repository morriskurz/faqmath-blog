import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { LoggerService } from "../shared/logger.service";
import { Slug } from '../customPipes/slug';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private db: AngularFirestore,
    private logger: LoggerService,
    private slug: Slug) { }

  createPost(post: Post) {
    const postData = JSON.parse(JSON.stringify(post));
    return this.db.collection('blogs').doc(this.slug.transform(post.title)).set(postData);
  }

  getAllPosts(): Observable<Post[]> {
    const blogs = this.db.collection<Post>('blogs', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          c => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data()
          }));
      }));
    return blogs;
  }

  /**
   * Searches for all articles matching the partial title provided.
   * @param title Title of the post.
   * @returns observable of all the posts matching the search query.  
   */
  searchPost(title: string): Observable<Post[]>{
    if (!title.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return of([]);
  }

  getPostbyId(id: string): Observable<Post> {
    const userDetails = this.db.doc<Post>('blogs/' + id).valueChanges();
    return userDetails;
  }

  updatePost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));
    return this.db.doc('blogs/' + postId).update(putData);
  }

  deletePost(postId: string) {
    return this.db.doc('blogs/' + postId).delete();
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // TODO: better job of transforming error for user consumption
      this.logger.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
