import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {
    
    constructor(private http:HttpClient){}

    getQuestions() {
        return this.http.get('http://10.211.55.3:50426/api/questions');
    }

    postQuestion(question) {
        this.http.post('http://10.211.55.3:50426/api/questions', question).subscribe(res => {
            console.log(res);
        })
    }
}