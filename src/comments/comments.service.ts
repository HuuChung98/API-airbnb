import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CommentsService {

  prisma = new PrismaClient

  async getComment() {
    try {
      return {
        message: "Get data successful",
        content: 
          await this.prisma.comments.findMany()
      }
    } catch (error) {
      return "error server"
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async postComment(createCommentDto) {
    try {

      let text = {...createCommentDto};
      let cmt = await this.prisma.comments.create({
        data: text
      })

      if (cmt) {
        return {
          message: "commented",
          content: cmt
        }
      } else {
        return {
          message: "comment fail"
        }
      }
    } catch (error) {
      return "error server"
    }
  }

  async updateComment(id, createCommentDto) {
    try {
      let cmt = {...createCommentDto};
      let updateCmt = await this.prisma.comments.update({
        data: cmt,
        where: { cmt_id: id }
      });

      if (updateCmt) {
        return {
          message: "updated",
        }
      } else {
        return {
          message: "update fail"
        }
      }
    } catch (error) {
      return "error server"      
    }
  }

  async removeComment(id) {
    try {
      return {
        message: "deleted",
        content: await this.prisma.comments.delete({
          where: {cmt_id: id}
        })
      }
    } catch (error) {
      
    }
  }

  async getCmtByRoomId(id) {
    try {
      let cmtByRoomId = await this.prisma.comments.findMany({
        where: { room_id: id}
      });

      if (cmtByRoomId.length != 0) {
        return {
          message: "get data successful",
          content: cmtByRoomId
        }
      } else {
        return {
          message: "Not comment"
        }
      }
    } catch (error) {
      return "error server";
    }
  }
}
