import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LabelResult } from '../LabelResult';
import { ModelResult } from '../ModelResult';
import { TextResult } from '../TextResult';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7104/api';

  constructor(private http: HttpClient) {}

  getLabelResults(): Observable<LabelResult[]> {
    return this.http.get<LabelResult[]>(`${this.apiUrl}/LabelResults`);
  }

  getLabelResultById(id: number): Observable<LabelResult> {
    return this.http.get<LabelResult>(`${this.apiUrl}/LabelResults/${id}`);
  }

  getModelResults(): Observable<ModelResult[]> {
    return this.http.get<ModelResult[]>(`${this.apiUrl}/ModelResults`);
  }

  getModelResultById(id: number): Observable<ModelResult> {
    return this.http.get<ModelResult>(`${this.apiUrl}/ModelResults/${id}`);
  }

  getTextResults(): Observable<TextResult[]> {
    return this.http.get<TextResult[]>(`${this.apiUrl}/TextResults`);
  }

  getTextResultById(id: number): Observable<TextResult> {
    return this.http.get<TextResult>(`${this.apiUrl}/TextResults/${id}`);
  }

  insertTextResult(text: string): Observable<TextResult> {
    const textResult = { sentenceText: text, modelResultId: 1 };
    return this.http.post<TextResult>(`${this.apiUrl}/TextResults/insert`, textResult);
  }
}
