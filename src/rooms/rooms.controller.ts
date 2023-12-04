import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('api/rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post('create-room')
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.createRoom(createRoomDto);
  }

  @Get()
  getRooms() {
    return this.roomsService.getRooms();
  }

  @Get('get-rooms/:location_id')
  getRoomsByLocation(@Param('location_id') location_id: string) {
    return this.roomsService.getRoomsByLocation(+location_id);
  }

  @Get('pagination')
  paginationSearch(@Query('index') pageIndex: String, @Query('size') pageSize: String, @Query('keyword') keyword: String) {
    return this.roomsService.paginationSearch(+pageIndex, +pageSize, keyword)
  }

  @Get(':room_id')
  infoRentRoom(@Param('room_id') room_id: String) {
    return this.roomsService.infoRentRoom(+room_id)
  }

  @Patch('update-room/:id')
  updateRoom(@Param('id') id: string, @Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.updateRoom(+id, createRoomDto);
  }

  @Delete('delete-room/:id')
  removeRoom(@Param('id') id: string) {
    return this.roomsService.removeRoom(+id);
  }
}
