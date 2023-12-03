import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {

  prisma = new PrismaClient();

  async getUser() {
    try {
      return {
        message: "get user successful",
        content: await this.prisma.user.findMany()
      };
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(createUserDto) {
    try {
      const { user_name, email, pass_word, phone_number, birth_day, gender, role } = createUserDto;

      let newUser = {
        user_name,
        email,
        pass_word,
        phone_number,
        birth_day,
        gender,
        role
      }
      await this.prisma.user.create({ data: newUser });
      return {
        message: "Created user"
      };
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(id: number, updateUserDto) {
    try {
      const user_id = id;
      let { user_name, email, pass_word, phone_number, birth_day, gender, role } = updateUserDto;

      let updateUser = {
        user_name,
        email,
        pass_word,
        phone_number,
        birth_day,
        gender,
        role
      }
      await this.prisma.user.update({ data: updateUser, where: { user_id: user_id } })
      return {
        message: "Updated user"
      };
    } catch (error) {
      return "error server";
    }
  }

  async removeUser(id) {
    try {
      const user_id = id;
      await this.prisma.user.delete({ where: { user_id: user_id } });

      return {
        message: "Deleted user"
      };

    } catch (error) {
      return "error server";
    }
  }

  async paginativeUser(pageIndex, pageSize, keyword) {
    try {
      console.log(pageIndex);
      console.log(pageSize);
      let skip = (pageIndex - 1) * pageSize;

      let pag_User = await this.prisma.user.findMany({
        where: { user_name: keyword },
        take: Number(pageSize),
        skip: skip
      })

      if (pag_User.length === 0) {
        return {
          message: "Can not find the user"
        };
      };
      return {
        message: "paginative user successful",
        content: pag_User
      };
    } catch (error) {
      return "error server";
    }
  }

  async getUserById(user_id) {
    try {
      console.log(user_id);
      return {
        message: "find user successful",
        content: await this.prisma.user.findFirst({ 
          where: {
            user_id: user_id
        }})
      };
    } catch (error) {
      return "error server";
    }
  }

  async searchNameOfUser(nameUser) {
    try {
      let search_name = await this.prisma.user.findFirst({
        where: { user_name: nameUser}
      });

      if (search_name) {
        return {
          message: "search name of user successful",
          content: search_name
        } 
      } else {
        return {
          message: "Can not find name of user",
        }
      }
    } catch (error) {
      return "error server";
    }
  }

  async uploadAvatar(user_id, file) {
    try {
       const { destination, filename } = file;
       const path = destination + filename;
       let userById = await this.prisma.user.findFirst({
        where: { user_id}
       });

       if (userById) {
        userById.avatar = path;

        await this.prisma.user.update({
          data: userById,
          where: { user_id}
        });

        return {
          message: "Upload Avatar successful"
        }
       } else {
        return {
          message: "Update load fail"
        }
       }
    } catch (error) {
      return "error server";
    }
  }

}



