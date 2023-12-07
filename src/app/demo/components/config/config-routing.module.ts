import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FieldOperationComponent } from './fieldOperation/fieldOperation.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'field-operations', component: FieldOperationComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class ConfigRoutingModule {}
