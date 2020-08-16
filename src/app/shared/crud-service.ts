import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs/operators';

export class CrudService<T> {

    constructor(public http: HttpClient, public API_URL) { }

    get(id){
        return this.http.get<T>(this.API_URL+'/'+id).pipe(take(1));
    }
}