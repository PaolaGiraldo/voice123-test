import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: 'search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnChanges, OnInit {

    form: FormGroup;
    voices: any = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.buildForm();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnchange');
        console.log(changes);
    }

    ngOnInit(): void {
    }

    searchVoices(): any {
        this.router.navigate(['/results', this.form.value.searchField]);
    }

    private buildForm(): any {
        this.form = this.formBuilder.group({
            searchField: ['', [Validators.required]],
        });
    }
}

