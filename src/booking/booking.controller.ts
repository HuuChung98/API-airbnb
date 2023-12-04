import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('api/booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('room')
  booking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.booking(createBookingDto);
  }

  @Get()
  getallBookingRoom() {
    return this.bookingService.getallBookingRoom();
  }

  @Get(':id')
  infoRoomBooking(@Param('id') id: string) {
    return this.bookingService.infoRoomBooking(+id);
  }

  @Patch('update/:id')
  updateBookingRoom(@Param('id') id: string, @Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.updateBookingRoom(+id, createBookingDto);
  }

  @Delete('remove-booking/:id')
  removeBooking(@Param('id') id: string) {
    return this.bookingService.removeBooking(+id);
  }

  @Get('infomation/:id')
  getInfoBookingByUserId(@Param('id') id: string) {
    return this.bookingService.getInfoBookingByUserId(+id);
  } 
}
