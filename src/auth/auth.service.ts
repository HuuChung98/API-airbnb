import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class AuthService {

  prisma = new PrismaClient();

  async login(loginAuthDto) {
    try {
      let { email, pass_word } = loginAuthDto;

      console.log(email);

      let checkEmail = await this.prisma.user.findFirst({
        where: { email }
      });
      if (checkEmail) {
        if (checkEmail.pass_word === pass_word) {
          return {
            message: "Login successful",
            content: checkEmail
          }
        }
      }
    } catch (error) {
      return "error server";
    }
  }

  async register(registerAuthDto) {
    try {
      let infoUser = await this.prisma.user.create({
        data: {...registerAuthDto}
      });

      if (infoUser) {
        return {
          message: "Created user",
          content: {...registerAuthDto}
        }
      }
    } catch (error) {
      return "error server";
    }
  }
}
