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
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
    this.getDefaults();
  }

  ngOnInit(){
    //For Example...
    this.getPosts(this.category, this.limit);
  }

  getDefaults(){
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    } else {
      this.category = "gaming";
    }

    if(localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }
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

  changeCategory(){
    this.getPosts(this.category, this.limit);
  }
} 
