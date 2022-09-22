import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


export default class InsertContactLWC extends NavigationMixin (LightningElement) {
    recordId;

    handleSuccess(event){
        
        this.recordId = event.detail.id;

        const toastEvent = new ShowToastEvent({
            title: 'Parabéns',
            message: 'O Contato ' + event.detail.id + ' foi  criado com sucesso!',
            variant: 'success'
        });

        this.dispatchEvent(toastEvent);

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
        
    }

    handleReset(){
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );

        if(inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
}