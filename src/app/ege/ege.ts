import {NgModule,Component,ElementRef,AfterViewChecked,AfterViewInit,OnDestroy,Input,Output,EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'p-ege',
    template: `
    <div >
        <br>
            <div *ngFor="let image of images" >
                <div *ngIf="image.alt == activeIndex">
                    <img  class="ui-panel-images" [src]="image.source" [alt]="image.alt" [title]="image.title" (click)="nextImageSelect()"/>
                </div>
               
            </div>
        
    </div>`,
})
export class Ege {

    @Input() style: any;

    @Input() styleClass: string;


    activeIndex: number = 1;

    _images: any[];

    constructor() {}


    @Input() get images(): any[] {
        return this._images;
    }
    set images(value:any[]) {
        this._images = value;
        this.activeIndex = 1;
    }

    nextImageSelect(){
       if(this.activeIndex<this._images.length){
           this.activeIndex++;

       }
       else{
           this.activeIndex = 1;
       }
    }
}
@NgModule({
    imports: [CommonModule],
    exports: [Ege],
    declarations: [Ege]
})
export class EgeModule { }
