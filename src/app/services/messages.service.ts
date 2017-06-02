import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from "@angular/material";

@Injectable()
export class MessagesService
{

  constructor( private snackBarService: MdSnackBar )
  {
  }
  
  /**
   * Retorna uma mensagem de sucesso para o usuário.
   * @param message
   */
  public toastSuccess( message: string )
  {
    let config = new MdSnackBarConfig();
    config.duration = 3000;
    config.extraClasses = ['bgc-green-800'];
    
    this.snackBarService.open( message, '', config );
  }
  
  /**
   * Retorna uma mensagem de erro para o usuário.
   * @param message
   */
  public toastError( message: string )
  {
    let config = new MdSnackBarConfig();
    config.duration = 3000;
    config.extraClasses = ['bgc-red-800'];
    
    this.snackBarService.open( message, '', config );
  }
}
