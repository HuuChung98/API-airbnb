import { Injectable } from '@nestjs/common';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class LocationsService {

  prisma = new PrismaClient();

  async createLocation(createLocationDto) {
    try {
      let location = { ...createLocationDto };
      let createLocation = await this.prisma.locations.create({
        data: location
      });

      if (location) {
        return {
          message: "create successful",
          content: createLocation
        }
      } else {
        return {
          message: "create location fail"
        }
      }
    } catch (error) {
      return "error server";
    }
  }

  async getLocation() {
    try {
      return {
        message: "get data successful",
        content: await this.prisma.locations.findMany()
      }
    } catch (error) {
      return "error server";
    }
  }

  async paginationLocation(size, index, keyword) {
    try {

      let skip = (index - 1) * size;
      let pagination = await this.prisma.locations.findMany({
        where: { name_location: keyword },
        skip: Number(skip),
        take: size
      });

      if (pagination.length === 0) {
        return {
          message: "not data"
        }
      } else {
        return {
          message: "get data successful",
          content: pagination
        }
      }

    } catch (error) {
      return "error server";
    }
  }

  async getLocationById(id: number) {
    try {
      return {
        message: 'get data successful',
        content: await this.prisma.locations.findFirst({
          where: { locate_id: id }
        })
      }
    } catch (error) {
      return "error server"
    }
  }

  async updateLocation(id: number, createLocationDto) {
    try {
      let updateData = { ...createLocationDto }
      await this.prisma.locations.update({
        data: updateData,
        where: { locate_id: id }
      })
      return {
        message: "updated"
      }
    } catch (error) {
      return "error server";
    }
  }

  async removeLocation(id: number) {
    try {
      await this.prisma.locations.delete({
        where: { locate_id: id }
      })
      return {
        message: "deleted"
      }
    } catch (error) {
      return "error server";
    }
  }
}
