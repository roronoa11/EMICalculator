import { LightningElement, api } from 'lwc';

export default class SliderAmount extends LightningElement {
   @api val=0;
   changeValue(event){
       this.val = event.target.value;
   }
}
