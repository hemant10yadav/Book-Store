import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { count, Observable } from 'rxjs';
import { Predicate, RestCategoryData } from '../../utils/types';
import { PredicateUtils } from '../../utils/PredicateUtils';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private api: ApiService) {}

  public browseSeriesUrl = '/get-book-set';
  public topSellerUrl = '/getGlobalBestsellersByAge';
  public popularUrl = '/getTopBooksByReviewCount';
  public genreUrl = '/get-books-by-genre';
  public mustReadUrl = '/get-must-read-set';
  public teacherPickUrl = '/getTeacherPicksByAge';

  public getBrowseSeriesBooks(
    age: number,
    page = 1,
    pageSize = 20,
  ): Observable<RestCategoryData> {
    const predicates = PredicateUtils.getAgePageSizePredicate(
      age,
      page,
      pageSize,
    );
    predicates.push(new Predicate('section_name', 'Browse+Library'));
    return this.api.get<RestCategoryData>(this.browseSeriesUrl, predicates);
  }

  public getTopSellerBooks(
    age: number,
    categoryLimit: number = 8,
    count: number = 10,
  ): Observable<RestCategoryData> {
    const predicate: Predicate[] = PredicateUtils.getAgePageSizePredicate(age);
    predicate.push(new Predicate('count', count));
    predicate.push(new Predicate('category_limit', categoryLimit));
    return this.api.get(this.topSellerUrl, predicate);
  }

  public getPopularBooks(
    age: number,
    categoryLimit: number = 4,
    count: number = 10,
  ): Observable<RestCategoryData> {
    const predicate: Predicate[] = PredicateUtils.getAgePageSizePredicate(age);
    predicate.push(new Predicate('count', count));
    predicate.push(new Predicate('category_limit', categoryLimit));
    return this.api.get(this.popularUrl, predicate);
  }

  public getBooksByGenre(
    age: number,
    page = 1,
    pageSize = 20,
  ): Observable<RestCategoryData> {
    const predicate: Predicate[] = PredicateUtils.getAgePageSizePredicate(
      age,
      page,
      pageSize,
    );
    return this.api.get(this.genreUrl, predicate);
  }
  public getBooksPickByTeachers(
    age: number,
    page = 1,
    pageSize = 20,
  ): Observable<RestCategoryData> {
    return this.api.get(
      this.teacherPickUrl,
      PredicateUtils.getAgePageSizePredicate(age),
    );
  }

  public getMustReadBooks(
    age: number,
    categoryCount = 6,
    bookCount = 20,
  ): Observable<RestCategoryData> {
    const predicates = PredicateUtils.getAgePageSizePredicate(age);
    predicates.push(new Predicate('category_count', categoryCount));
    predicates.push(new Predicate('section_name', 'Best Seller Series'));
    predicates.push(new Predicate('book_count', bookCount));
    predicates.push(new Predicate('show_unavailable', true));
    return this.api.get(this.mustReadUrl, predicates);
  }
}
