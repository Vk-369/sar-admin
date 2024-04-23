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
  apiUrl: string = 'http://localhost:3000/insert/newSong/byUrl'; // Change this URL to your server's URL

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      url: ['', Validators.required],
      displayName: ['', Validators.required],
    });
  }

  onSubmit() {
    this.postData(this.form.value).subscribe(response => {
      this.data = response;
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
