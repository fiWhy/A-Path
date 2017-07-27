import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @Output() handleDrop = new EventEmitter();

  constructor(private el: ElementRef) { }
  
  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
      event.preventDefault();
  }

  @HostListener("drop", ["$event"])
  onDrop(event) {
    this.handleDrop.emit(event.dataTransfer.getData("options"));
  }

}
