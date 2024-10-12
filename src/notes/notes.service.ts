import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notes } from './notes.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private readonly notesModel: Repository<Notes>,
  ) {}

  async createNotes(message: string) {
    return await this.notesModel.save({ message: message });
  }

  async getAllNotes() {
    return await this.notesModel.find();
  }

  async getOne(id: number) {
    return await this.notesModel.findOne({ where: { id } });
  }

  async updateMessage(id: number, message: string) {
    return await this.notesModel.update({ id }, { message });
  }

  async deleteMessage(id) {
    return await this.notesModel.delete(id);
  }
}
