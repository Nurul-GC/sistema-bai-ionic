import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public ca = document.getElementById('ca');
  public rt = document.getElementById('rt');
  public cd = document.getElementById('cd');
  public al = document.getElementById('al');
  public bc = document.getElementById('bc');
  public cv = document.getElementById('cv');
  public aj = document.getElementById('aj');

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /*
  public convidarAmigos(){
    if (this.folder === 'Convidar-Amigos'){
      this.rt.setAttribute('hidden', 'true');
      this.cd.setAttribute('hidden', 'true');
      this.al.setAttribute('hidden', 'true');
      this.bc.setAttribute('hidden', 'true');
      this.cv.setAttribute('hidden', 'true');
      this.aj.setAttribute('hidden', 'true');
      return true;
    }else{
      return false;
    }
  }

  public recarregarTelefone(){
    if (this.folder === 'Recarregar-Telefone'){
      this.ca.setAttribute('hidden', 'true');
      this.cd.setAttribute('hidden', 'true');
      this.al.setAttribute('hidden', 'true');
      this.bc.setAttribute('hidden', 'true');
      this.cv.setAttribute('hidden', 'true');
      this.aj.setAttribute('hidden', 'true');
      return true;
    }else{
      return false;
    }
  }

  public carteiraDigital(){
    if (this.folder === 'Carteira-Digital'){
      this.ca.setAttribute('hidden', 'true');
      this.rt.setAttribute('hidden', 'true');
      this.al.setAttribute('hidden', 'true');
      this.bc.setAttribute('hidden', 'true');
      this.cv.setAttribute('hidden', 'true');
      this.aj.setAttribute('hidden', 'true');
      return true;
    }else{
      return false;
    }
  }

  public ajustarLimites(){
    if (this.folder === 'Ajustar-Limites'){
      this.ca.setAttribute('hidden', 'true');
      this.rt.setAttribute('hidden', 'true');
      this.cd.setAttribute('hidden', 'true');
      this.bc.setAttribute('hidden', 'true');
      this.cv.setAttribute('hidden', 'true');
      this.aj.setAttribute('hidden', 'true');
      return true;
    }else{
      return false;
    }
  }

  public bloquearCartoes(){
    if (this.folder === 'Bloquear-Cartões'){
      this.ca.setAttribute('hidden', 'true');
      this.rt.setAttribute('hidden', 'true');
      this.cd.setAttribute('hidden', 'true');
      this.al.setAttribute('hidden', 'true');
      this.cv.setAttribute('hidden', 'true');
      this.aj.setAttribute('hidden', 'true');
      return true;
    }else{
      return false;
    }
  }

  public cartoesVirtuais(){
    if (this.folder === 'Cartões-Virtuais'){
      this.ca.setAttribute('hidden', 'true');
      this.rt.setAttribute('hidden', 'true');
      this.cd.setAttribute('hidden', 'true');
      this.al.setAttribute('hidden', 'true');
      this.bc.setAttribute('hidden', 'true');
      this.aj.setAttribute('hidden', 'true');
      return true;
    }else{
      return false;
    }
  }

  public ajuda(){
    if (this.folder === 'Ajuda'){
      this.ca.setAttribute('hidden', 'true');
      this.rt.setAttribute('hidden', 'true');
      this.cd.setAttribute('hidden', 'true');
      this.al.setAttribute('hidden', 'true');
      this.bc.setAttribute('hidden', 'true');
      this.cv.setAttribute('hidden', 'true');
      return true;
    }else{
      return false;
    }
  }
  */
}
