//DEMO PROPS
export interface AddressProps {
    street: string;
    city: string;
    pinCode: number;
}

export interface PersonProps {
    name: string;
    age: number;
    email: string;
    phone: number;
}

export interface UserProps {
    id: string;
    personalDetails: PersonProps,
    address: AddressProps,
}
