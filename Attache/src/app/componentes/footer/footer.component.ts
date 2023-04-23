import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
fruta:string = 'manzana';
verdura: string = 'lechuga';
pi: number = 3.141592653559;
ciudad= {
  nombre: 'Bahia BLanca',
  poblacion: 284776
};
helloWord = () =>{
  return "Hola mundo!"
}


}
