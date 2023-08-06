import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogRepositoryService } from './catalog/catalog-repository.service';
import { CatalogComponent } from "./catalog/catalog.component";
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CatalogRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
