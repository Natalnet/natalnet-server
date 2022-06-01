import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsRepository {
  constructor(private prisma: PrismaService) {}

  async saveProject(project: Project) {
    try {
        return await this.prisma.project.create({
            data: project,
          });
    } catch (error) {
        throw new Error('Error in projects repository')
    }
  }
}
