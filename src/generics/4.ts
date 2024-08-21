type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: Partial<User>) {
    // Оновлення або створення користувача
  }
  
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });

  createOrUpdateUser({ 
    name: 'user', 
    surname: 'User' 
  });