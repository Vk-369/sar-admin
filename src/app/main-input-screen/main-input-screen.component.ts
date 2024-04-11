import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-input-screen',
  templateUrl: './main-input-screen.component.html',
  styleUrls: ['./main-input-screen.component.css']
})
export class MainInputScreenComponent implements OnInit {

  form: any;
  data: any;
  apiUrl: any = '/insert/newSong/byUrl';

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      // field3: ['', Validators.required],
      // field4: ['', Validators.required],
      // field5: ['', Validators.required],
    });
  }

  onSubmit() {
    this.getData().subscribe((response) => {
      this.data = response;
    });
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
