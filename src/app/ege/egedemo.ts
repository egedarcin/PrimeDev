import {Component} from '@angular/core';

@Component({
    templateUrl: './egedemo.html'
})
export class EgeDemo {

    images: any[];

    constructor() {
        this.images = [];
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria1.jpg', alt:'1', title:'Title 1'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria2.jpg', alt:'2', title:'Title 2'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'3', title:'Title 3'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'4', title:'Title 4'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'5', title:'Title 5'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'6', title:'Title 6'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'7', title:'Title 7'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'8', title:'Title 8'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'9', title:'Title 9'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'10', title:'Title 10'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'11', title:'Title 11'});
        this.images.push({source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'12', title:'Title 12'});

    }


}
