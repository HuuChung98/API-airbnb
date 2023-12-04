import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('api/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('text')
  postComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.postComment(createCommentDto);
  }

  @Get()
  getComment() {
    return this.commentsService.getComment();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch('text/update/:id')
  updateComment(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.updateComment(+id, createCommentDto);
  }

  @Delete(':id')
  removeComment(@Param('id') id: string) {
    return this.commentsService.removeComment(+id);
  }

  @Get('comment-by-roomId/:id')
  getCmtByRoomId(@Param('id') id: string) {
    return this.commentsService.getCmtByRoomId(+id);
  }
}
