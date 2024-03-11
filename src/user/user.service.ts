import { Injectable } from '@nestjs/common';

interface User {
  name: string;
  age: number;
}

@Injectable()
export class UserService {
  getUser(): User {
    return { name: 'Florian Biendine', age: 22 };
  }

  getName() : string {
    return 'Florian'
  }

  getYears() : number {
    return 22
  }
}
