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
  contacts: { name: string }[] = [
    { name: 'Yaroslav' },
    { name: 'Alex' },
    { name: 'Ruslan Shedy' }];

  isSelected(contact: any) {
    return this.selectedContact === contact;
  }

  selectContact(contact: any) {
    this.selectedContact = contact;
  }

  addContact() {
    this.contacts.push({ name: this.newContactName });
    this.newContactName = '';
  }
}
