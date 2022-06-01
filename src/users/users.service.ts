import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(user: CreateUserDto) {
    const hashPassword = await bcrypt.hash(user.password, 10);
    const newUser: User = {
      id: uuid(),
      ...user,
      password: hashPassword,
      created_at: new Date(),
      updated_at: new Date(),
    };

    try {
      await this.usersRepository.save(newUser);
      return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
      };
    } catch (error) {
      throw new Error('Error in users service');
    }
  }
}
