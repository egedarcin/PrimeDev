import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {EgeDemo} from './egedemo';
import {EgeDemoRoutingModule} from './egedemo-routing.module';
import {EgeModule} from '../../../components/ege/ege';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EgeDemoRoutingModule,
        EgeModule
    ],
    declarations: [
        EgeDemo
    ]
})
export class EgeDemoModule {}
