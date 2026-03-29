import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalService {

  private _tag$ = new BehaviorSubject<string>('Basic words');
  private _category$ = new BehaviorSubject<string>('BASIC WORDS');
  private _level$ = new BehaviorSubject<string>('A1');

  // ✅ Getter pour récupérer l'observable
  get tag$(): Observable<string> {
    return this._tag$.asObservable();
  }

  // ✅ Getter pour récupérer l'observable
  get level$(): Observable<string> {
    return this._level$.asObservable();
  }

  // ✅ Setter pour changer le tag
  setTag(tag: string) {
    this._tag$.next(tag);
  }

   // ✅ Setter pour changer la category
  setCategory(category: string) {
    this._category$.next(category);
  }

  // ✅ Setter pour changer le level
  setLevel(level: string) {
    this._level$.next(level);
  }

  // Optionnel : récupérer directement la valeur actuelle
  get currentCategory(): string {
    return this._category$.getValue();
  }


  // Optionnel : récupérer directement la valeur actuelle
  get currentTag(): string {
    return this._tag$.getValue();
  }

  // Optionnel : récupérer directement la valeur actuelle
  get currentLevel(): string {
    return this._level$.getValue();
  }
}