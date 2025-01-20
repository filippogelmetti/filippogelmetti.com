import { Component } from '@angular/core';
import { clients } from '@data/clients';
import { Client } from '@domain/models/client';

@Component({
  selector: 'clients-page',
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss',
})
export class ClientsPageComponent {
  public clientList: Client[] = Object.values(clients);
}
