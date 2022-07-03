export interface Recipe{
    internal_id:number;
    title: string;
    summary: string;
    ready_in_minutes:number;
    servings:number;
    image: string;
    dish_type:string[];
    favourite:boolean;
}