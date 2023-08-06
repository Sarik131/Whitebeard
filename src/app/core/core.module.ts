import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountMenuComponent } from './account-menu.component';
import { NavBarComponent } from './nav-bar.component';


@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [AccountMenuComponent, NavBarComponent],
    declarations: [AccountMenuComponent, NavBarComponent],
    providers: []
})
export class CoreModule { }
