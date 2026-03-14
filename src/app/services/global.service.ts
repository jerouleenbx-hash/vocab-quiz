import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalService {

  private _tag$ = new BehaviorSubject<string>('Basic words');
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

  // ✅ Setter pour changer le level
  setLevel(level: string) {
    this._level$.next(level);
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