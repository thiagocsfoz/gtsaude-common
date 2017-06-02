import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdSnackBarModule } from "@angular/material";
import { MessagesService } from "app/services/messages.service";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdSnackBarModule
  ],
  exports: [
    MessagesService
  ],
  providers: [ MessagesService ],
  bootstrap: []
})
export class GtSaudeCommonModule {

}
