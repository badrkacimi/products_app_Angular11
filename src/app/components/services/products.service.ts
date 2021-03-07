import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Product } from "../model/product.model";
import { Observable } from "../model/product.model";


@Injectable({providedIn:'root'})
export class ProductsService


{
    constructor(private http: HttpClient){

    }
getallProducts() :Observable<Product[]>{
    let host = environment.host;
    this.http.get<Product []>(host+'/products')
}


}