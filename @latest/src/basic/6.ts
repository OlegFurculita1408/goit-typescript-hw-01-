type User = {
    name : string;
    age : number;
    email : string;
    address? : {city : string, country : string}
}

const mango : User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly : User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

// 2 variant 

interface Address {
    city: string;
    country: string;
}

interface User {
    name: string;
    age: number;
    email: string;
    address?: Address; // address is an optional property
}

const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};