import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BookingService {

  prisma = new PrismaClient();

  async getallBookingRoom() {
    try {
      return {
        message: "get data successful",
        content: await this.prisma.bookings.findMany()
      }
    } catch (error) {
      return "error server";
    }
  }

  async infoRoomBooking(id: number) {
    try {
      let infoRoom = await this.prisma.bookings.findFirst({
        where: { booking_id: id }
      });

      if (infoRoom) {
        return {
          message: "get data successful",
          content: infoRoom
        }
      } else {
        return {
          message: "get data fail",
        }
      }
    } catch (error) {
      return "error server";
    }
  }

  async booking(createBookingDto) {
    try {
      const bookRoom = { ...createBookingDto };

      let book_room = await this.prisma.bookings.create({
        data: bookRoom
      })

      if (book_room) {
        return {
          message: "Booking successful",
          content: book_room
        }
      } else {
        return {
          message: "booking fail"
        }
      }
    } catch (error) {
      return "error server";
    }
  }

  async updateBookingRoom(id, createBookingDto) {
    try {
      let updateRoom = { ...createBookingDto };
      let update = await this.prisma.bookings.update({
        data: updateRoom,
        where: { booking_id: id }
      })

      if (update) {
        return {
          message: "Updated",
          content: update
        }
      } else {
        return {
          message: "Update fail",
        }
      }
    } catch (error) {
      return "error server";
    }
  }

  async removeBooking(id: number) {
    try {
      await this.prisma.bookings.delete({
        where: { booking_id: id }
      })

      return {
        message: "deleted",
      }
    } catch (error) {
      return "error server";
    }
  }

  async getInfoBookingByUserId(id) {
    try {
      let info = await this.prisma.bookings.findMany({
        where: { user_id: id},
        include: {
          rooms: true
        }
      })

      if(info) {
        return {
          message: "get data successful",
          content: info
        }
      }
      return {
        mesage: "get data fail",
      }
    } catch (error) {
      return "error server";
    }
  }
}
