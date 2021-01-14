import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedContact: any;
  title = 'Some cool app';
  newContactName: string = '';
  contacts = ['Yaroslav', 'Alex', 'Ruslan']

  isSelected(contact: any) {
    return this.selectedContact === contact;
  }

  selectContact(contact: any) {
    this.selectedContact = contact;
  }

  addContact() {
    this.contacts.push(this.newContactName);
    this.newContactName = '';
  }
}
