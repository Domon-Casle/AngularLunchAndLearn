export class Customer {
    id: number;
    fullName: string;
    active: boolean;

    constructor(id: number, fullName: string, active: boolean)
    {
        this.id = id;
        this.fullName = fullName;
        this.active = active;
    }
}