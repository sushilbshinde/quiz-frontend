import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    
    constructor(private http:HttpClient){}

    register(credentials) {
        this.http.post<any>(`http://10.211.55.3:50426/api/account`, credentials).subscribe( res => {
            localStorage.setItem('token', res);
            console.log(res);
        });
    }
}