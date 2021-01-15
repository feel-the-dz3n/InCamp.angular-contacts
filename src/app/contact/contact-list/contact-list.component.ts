import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  selectedContact: any;
  @Input() contacts: any;
  @Output() select = new EventEmitter();

  isSelected(contact: any) {
    return this.selectedContact === contact;
  }

  selectContact(contact: any) {
    this.selectedContact = contact;
    this.select.emit(contact);
  }
}
