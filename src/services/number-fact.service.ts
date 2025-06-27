import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class NumberFactService {
  constructor(private http: HttpClient) {}

  getFact(num: number): Observable<string> {
    return this.http.get(`http://numbersapi.com/${num}`, {
      responseType: "text",
    });
  }
}
