export class Quote {
  public showDescription:boolean;
  constructor(public name:string, public author:string, public publisher:string, public lapse:Date, public upvote:number, public downvote:number) {
    this.showDescription=false;
    upvote=0;
    downvote=0;
  }
}
