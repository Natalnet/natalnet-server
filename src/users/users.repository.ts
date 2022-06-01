import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async save(user: User) {
    try {
      const response = this.prisma.user.create({
        data: user,
      });
      return response;
    } catch (error) {
      throw new Error('Error in users repository')
    }
  }
}
