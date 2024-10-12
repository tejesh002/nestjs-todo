import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async createNotes(@Body() body) {
    return await this.notesService.createNotes(body.message);
  }

  @Get()
  async findAll() {
    return await this.notesService.getAllNotes();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.notesService.getOne(id);
  }

  @Put(':id')
  async updateMessage(@Param('id') id: number, @Body() body) {
    return await this.notesService.updateMessage(id, body.message);
  }

  @Delete(':id')
  async deletemessage(@Param('id') id: number) {
    await this.notesService.deleteMessage(id);
    return { success: true, message: 'deleted successfully' };
  }
}
