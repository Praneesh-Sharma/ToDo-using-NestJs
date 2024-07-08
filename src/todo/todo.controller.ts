import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGaurd } from 'src/auth/aut.gaurd';
import { UserEmail } from 'src/common/decorator/user-email.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  
  @ApiBearerAuth()
  @UseGuards(JwtAuthGaurd)
  @ApiOperation({description: 'To add a new task to the user  email.', summary:'Add a new task.'})
  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @UserEmail() userEmail: string) {
    console.log("output")
    return this.todoService.create(createTodoDto, userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGaurd)
  @ApiOperation({description: 'To find all the tasks to the user  email.', summary:'Get all the tasks'})
  @Get()
  findAll(
    @UserEmail() userEmail: string,
  ) {
    // console.log(userEmail)
    return this.todoService.findAll(userEmail);
  }

  @ApiBearerAuth()
  @ApiOperation({description: 'To find a specific task to the user  email.', summary:'Get one unique task'})
  @UseGuards(JwtAuthGaurd)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGaurd)
  @ApiOperation({description: 'To update a specific task to the user  email.', summary:'Update a Task'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGaurd)
  @ApiOperation({description: 'To delete a taks to the user  email.', summary:'Delete a Task'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
