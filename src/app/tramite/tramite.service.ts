import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UsuarioService} from '../usuario/usuario.service';
import * as variables from '../const';
@Injectable()
export class TramiteService {
    headers = new Headers();
    base: string  = variables.base;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }

    index() {
        return this.http.get(this.base + 'tramites', {headers: this.headers}).map(res=>res.json().map(data=>data));
    }
    show(id) {
        return this.http.get(this.base + 'tramites/' + id, {headers: this.headers}).map(res=>res.json());
    }
    store(data) {
        return this.http.post(this.base + 'tramites', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data) {
        return this.http.put(this.base + 'tramites/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id) {
        return this.http.delete(this.base + 'tramites/' + id, {headers: this.headers}).map(res=>res.json());
    }
}
