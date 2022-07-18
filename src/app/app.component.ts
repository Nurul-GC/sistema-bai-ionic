import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Convidar Amigos', url: '/folder/Convidar-Amigos', icon: 'person-add' },
    { title: 'Recarregar Telefone', url: '/folder/Recarregar-Telefone', icon: 'phone-portrait' },
    { title: 'Ajustar Limites', url: '/folder/Ajustar-Limites', icon: 'options' },
    { title: 'Carteira Digital', url: '/folder/Carteira-Digital', icon: 'wallet' },
    { title: 'Cartões Virtuais', url: '/folder/Cartões-Virtuais', icon: 'card' },
    { title: 'Bloquear Cartões', url: '/folder/Bloquear-Cartões', icon: 'lock-open' },
    { title: 'Ajuda', url: '/folder/Ajuda', icon: 'help-circle' },
  ];
  public labels = [
    'Familia',
    'Amigos',
    'Notas',
    'Trabalho',
    'Viagens',
    'Lembretes'
  ];
  constructor() {}
}
