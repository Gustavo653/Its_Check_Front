import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'categories', component: CategoryComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class ConfigRoutingModule {}
