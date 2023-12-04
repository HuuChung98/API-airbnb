import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RoomsService {

  prisma = new PrismaClient();

  async getRooms() {
    try {
      return {
        message: "Get all rooms successful",
        content: await this.prisma.rooms.findMany()
      }
    } catch (error) {
      return "error server";
    }
  }

  async createRoom(createRoomDto) {
    try {
      return {
        message: "Create room successful",
        content: await this.prisma.rooms.create({ data: { ...createRoomDto } })
      }
    } catch (error) {
      return "error server";
    }
  }

  async getRoomsByLocation(location_id) {
    try {
      return {
        message: "get room successful",
        content: await this.prisma.rooms.findMany({
          where: { locate_id: location_id }
        })
      }
    } catch (error) {
      return "error server";
    }
  }

  async paginationSearch(pageIndex, pageSize, keyword) {
    try {
      let skip = (pageIndex - 1) * pageSize;

      let paginationRoom = await this.prisma.rooms.findMany({
        where: { room_name: keyword },
        take: Number(pageSize),
        skip: skip,
      })

      if (paginationRoom.length === 0) {
        return {
          message: "pagination fail",
          content: paginationRoom
        }
      }
      return {
        message: "successful",
        content: paginationRoom
      }
    } catch (error) {
      return "error server"
    }
  }


  async infoRentRoom(room_id) {
    try {
      let infoRoom = await this.prisma.rooms.findFirst({
        where: { room_id: room_id }
      })

      if (infoRoom) {
        return {
          message: "Get information room successful",
          content: infoRoom
        }
      } else {
        return {
          message: "Get information fail"
        }
      }
    } catch (error) {
      return "error server"
    }
  }

  async updateRoom(id, createRoomDto) {
    try {
      return {
        message: "Update successful",
        content: await this.prisma.rooms.update({
          data: createRoomDto,
          where: {room_id: id}
        })
      }
    } catch (error) {
      return "error server";
    }
  }

  async removeRoom(id: number) {
    try {
      await this.prisma.rooms.delete({
        where: {room_id: id}
      })
      return {
        message: "Deleted room"
      }
    } catch (error) {
      return "error server"
    }
  }
}
