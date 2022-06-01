import { PrismaService } from 'src/database/prisma/prisma.service';
import { User } from './entities/user.entity';

export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async save(user: User) {
    const response = this.prisma.user.create({
      data: user,
    });
    return response;
  }
}
