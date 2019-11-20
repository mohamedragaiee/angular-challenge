import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    // function to fetch all user from fake api 
    // author : Mohamed Ragaie
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
}