import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Ege } from './ege';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Ege', () => {

    let ege: Ege;
    let fixture: ComponentFixture<Ege>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule
            ],
            declarations: [
                Ege
            ]
        });

        fixture = TestBed.createComponent(Ege);
        ege = fixture.componentInstance;
    });
});
