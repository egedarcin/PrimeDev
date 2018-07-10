import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {EgeDemo} from './egedemo';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'',component: EgeDemo}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class EgeDemoRoutingModule {}
