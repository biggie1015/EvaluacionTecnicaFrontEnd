import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/services/UsuarioService.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent implements OnInit {
  public UserList: any;
  public userName:string = "";
  public userId: number = 0;
  public User = null;



  constructor(private userService: UsuarioService,private modalService: NgbModal) {
    this.getUsuarios();
    
  }

  ngOnInit(): void {}

  getUsuarios(): void {
    this.userService.getAll().subscribe((data: any) => {
    this.UserList = data;
      console.log(this.UserList);
    });

  }

  onDeleteConfirm(item:any,modal:any){
    this.userId = item.id;
    this.modalService.open(modal);
    this.userName = item.nombre
   //
  }


  // Dividir la parte de UPDATE Y CREATE en Componentes diferentes
  EditUsuario(modal:any){
       this.modalService.open(modal);
  }

  Update(){
   // this.userService.update(this.userId)
  }

  DeleteUser(){
    
    this.userService.delete(this.userId).subscribe(data => data);
  }

  dismiss(){
      this.modalService.dismissAll();
  }
}
