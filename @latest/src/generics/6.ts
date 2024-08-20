type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };
  
  // We create the Params type, which includes all fields from the Form, except for 'errors'
  type Params = Omit<Form, 'errors'>;