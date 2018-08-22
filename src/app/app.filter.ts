import { Pipe ,PipeTransform} from "@angular/core";

@Pipe(
    {
        name:'filter'
    }
)

export class Filter implements PipeTransform{
 filteredData = [];

transform(value:any,search)
{
    if(search===undefined){
        this.filteredData=[];
        return value;  
    }else{
        this.filteredData=[];
       for(const v of value){
           console.log(v);
           if(v.indexOf(search)>=0){
               this.filteredData.push(v);
           }
       }
    }
    return this.filteredData;
    }


}