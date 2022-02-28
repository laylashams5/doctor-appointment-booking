import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  @Output() closed = new EventEmitter<boolean>();
  @Output() opened = new EventEmitter<boolean>();
  constructor() { }
}
