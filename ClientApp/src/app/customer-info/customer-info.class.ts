export class CustomerInfo {
        Id:number;
        legalName: String;
        ownership: Number;
        dtiRegDate: Date;
        registeredBusinessNumber: String;
        customerNumber: String;
        owners:Owner[];
        signatories:Signatory[]
      
}

export class Owner {
    // constructor(parameters) {
        
    // }
    Id:number;
    name:string;
    percentOfOwnership:number;
    typeOfRelatedParty:number;
    remarks:string;
}
export class Signatory {
    constructor(parameters) {
        
    }
}