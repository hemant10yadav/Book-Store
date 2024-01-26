import { Predicate } from './types';

export class PredicateUtils {
  public static AGE = 'age';
  public static PAGE_START = 'start';
  public static PAGE_END = 'end';
  public static COUNT = 'count';
  public static CATEGORY_LIMIT = 'category_limit';

  public static getPageIndex(
    page: number,
    itemsPerPage: number = 20,
  ): { start: number; end: number } {
    const pageStart = (page - 1) * itemsPerPage;
    return {
      start: pageStart ? pageStart + 1 : pageStart,
      end: itemsPerPage * page,
    };
  }

  public static getPagePredicate(
    page: number,
    itemsPerPage: number = 20,
  ): Predicate[] {
    const pageObj = this.getPageIndex(page, itemsPerPage);
    return [
      new Predicate(this.PAGE_START, pageObj.start),
      new Predicate(this.PAGE_END, pageObj.end),
    ];
  }

  public static getAgePageSizePredicate(
    age: number,
    page?: number,
    itemsPerPage: number = 20,
  ): Predicate[] {
    const predicates: Predicate[] = [new Predicate(this.AGE, age)];
    if (page != null) {
      predicates.push(...this.getPagePredicate(page, itemsPerPage));
    }
    return predicates;
  }
}
