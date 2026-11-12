import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalService {

  private _tag$ = new BehaviorSubject<string>('Basic words');
  private _category$ = new BehaviorSubject<string>('BASIC WORDS');
  private _type$ = new BehaviorSubject<string>('All');

  // ✅ Getter pour récupérer l'observable
  get tag$(): Observable<string> {
    return this._tag$.asObservable();
  }

  get type$(): Observable<string> {
    return this._type$.asObservable();
  }

  // ✅ Setter pour changer le tag
  setTag(tag: string) {
    this._tag$.next(tag);
  }

   // ✅ Setter pour changer la category
  setCategory(category: string) {
    this._category$.next(category);
  }

  setType(type: string) {
    this._type$.next(type);
  }

  // Optionnel : récupérer directement la valeur actuelle
  get currentCategory(): string {
    return this._category$.getValue();
  }


  // Optionnel : récupérer directement la valeur actuelle
  get currentTag(): string {
    return this._tag$.getValue();
  }

  get currentType(): string {
    return this._type$.getValue();
  }
}