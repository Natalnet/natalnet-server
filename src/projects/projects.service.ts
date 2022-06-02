import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';
import { ProjectsRepository } from './projects.repository';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}

  async create(project: CreateProjectDto) {
    const newProject: Project = {
      id: uuid(),
      ...project,
      created_at: new Date(),
      updated_at: new Date(),
      students: [],
    };

    try {
      await this.projectsRepository.saveProject(newProject);
      return {
        id: newProject.id,
        name: newProject.name,
        coordinators: newProject.coordinators,
      };
    } catch (error) {
      throw new Error ('Error in projects service')
    }
  }
}
