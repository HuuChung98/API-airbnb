import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, FileUploadDto } from './dto/create-user.dto';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create-user')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUser() {
    return this.usersService.getUser();
  }

  @Patch('update-user/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @Delete('delete-user/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }

  @Get('pagination-user')
  paginativeUser(@Query('index') pageIndex: string, @Query('size') pageSize: string, @Query('keyword') keyword: string) {
    return this.usersService.paginativeUser(+pageIndex , +pageSize, keyword)
  }

  @Get(':id')
  getUserById(@Param('id') user_id: number) {
    return this.usersService.getUserById(+user_id)
  }

  @Get('search-user/:nameUser')
  searchNameOfUser(@Param('name') nameUser: string) {
    return this.usersService.searchNameOfUser(nameUser);
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody(
    {
      description: 'file',
      type: FileUploadDto,
    }
  )
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: process.cwd() + "/public/images",
      filename: (rep, file, cb) => cb(null, new Date().getTime() + file.originalname)
    })
  }))
  @Post('upload-avatar/:id')
  uploadAvatar(@Param('id') user_id: string, @UploadedFile() file: Express.Multer.File) {
    return this.usersService.uploadAvatar(+user_id, file);
  }
}
