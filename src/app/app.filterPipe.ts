import { Pipe, PipeTransform } from "@angular/core";
// import { Filter } from "./app.filter";

@Pipe(
    {
        name: 'filter'
    }
)

export class FilterPipe implements PipeTransform {
    filteredData = [];

    transform(value: any, search) {
        if (search === undefined) {
            this.filteredData = [];
            return value;
        } else {
            this.filteredData = [];
            for (const v of value) {
                console.log(v);
                if (v.indexOf(search) >= 0) {
                    this.filteredData.push(v);
                }
            }
        }
        return this.filteredData;
    }


}