import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CatalogComponent } from './catalog.component';



@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [CatalogComponent],
  exports:[],
  providers: []
})
export class CatalogModule { }
