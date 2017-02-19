import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddits.service'
import { DetailsPage } from '../details/details';

@Component({
  selector: 'myreddits',
  templateUrl: 'myreddits.html'
})
export class MyRedditsPage {
  items: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {

  }

  ngOnInit(){
    //For Example...
    this.getPosts('gaming', 10);
  }

  getPosts(category, limit){
    //Getting all the category posts...
    this.redditService.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
    })
  }

  viewItem(item){
    //Getting to the post content...
    this.navCtrl.push(DetailsPage,{
      item:item
    });
  }
} 
