import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NumberFactService {
  private baseUrl = "http://numbersapi.com";

  constructor(private http: HttpClient) {}

  getFact(n: number) {
    const storedFact = localStorage.getItem(`fact-${n}`);
    if (storedFact) {
      return of(storedFact);
    }

    return this.http.get(`${this.baseUrl}/${n}`, { responseType: "text" }).pipe(
      map((fact) => {
        localStorage.setItem(`fact-${n}`, fact);
        return fact;
      }),
      catchError((error) => {
        console.error("Error al obtener dato desde API:", error);
        return of(`Sin conexión. No hay dato guardado para el número ${n}.`);
      })
    );
  }
}
