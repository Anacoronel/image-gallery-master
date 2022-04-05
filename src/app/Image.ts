

export class Image {
album:number=0;
id:number=0
title:string="";
amount:number=0;
url:string="";
thumbnailUrl:string="";
constructor(album:number, id:number,amount:number, title:string, url:string, thumbnailUrl:string){}

public getTitle(title:string){
    this.title=title;
}

public countVowels(title:string){
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < title.length; i++) {
        if (vowels.includes(title[i])) {
            count++;
        }
    }
    return count;

}

public getCountVowels(){
    return this.countVowels(this.title);
}




}

