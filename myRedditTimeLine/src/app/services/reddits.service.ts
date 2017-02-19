import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
    http:any;
    baserUrl: String;

    constructor(http:Http){
        //Connection to Reddit
        this.http = http;
        this.baserUrl = 'https://www.reddit.com/r';
    }

    getPosts(category, limit){
        return this.http.get(this.baserUrl+'/'+category+'/top.json?limit='+limit)
        .map(res => res.json());
    }
}