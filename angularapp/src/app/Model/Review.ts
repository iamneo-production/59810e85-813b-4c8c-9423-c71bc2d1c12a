import { Movie } from "./Movie";

export class Review{
    id:number=0;
    userId:number=0;
    rating:string ='';
    reviewNote:string='';
    source: string='';
    date: Date | undefined;
    movie:Movie=new Movie();
}