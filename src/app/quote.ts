export class Quote {
  public showDescription:boolean;
  constructor(public name:string, public author:string, public publisher:string) {
    this.showDescription=false;
  }
}
