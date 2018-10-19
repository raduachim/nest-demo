import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat-dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  findOne(@Param('id') id) {
    return `this returns a #${id} cat`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto: UpdateCatDto) {
    return `this updates the #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `the #${id} cat has just been erased`;
  }
}
