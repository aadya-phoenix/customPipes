import { Component } from '@angular/core';
import { SalaryService } from './salary.service';
type myType ={name:string,price:number} ;


@Component({
    selector:'salary-calc',
    templateUrl:'salCalc.component.html',
    //template:`<h1> this is salary calc</h1>`,
    styleUrls:['salCalc.component.css'],
    
     
    //styles:``,
})

export class SalaryCalc {
    
    basicSal:number;
    //salaryService : SalaryService;
    fruits:myType[] = [{name:'apple', price:88},{name:'MANGO', price:99},{name:'grapes',price:100}];
   cardNumber:number;

    constructor(private salaryService:SalaryService){
       this.basicSal = 0;
       //this.salaryService = new SalaryService();
       

    }

    takeCardNumber(event){
 this.cardNumber= event.target.value;
    }

    takeSalary(event):void{
        this.basicSal = event.target.value ;
        this.salaryService.takeBasicSalary(this.basicSal);

    }

}