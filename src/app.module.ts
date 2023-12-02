import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { LocationsModule } from './locations/locations.module';
import { CommentsModule } from './comments/comments.module';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ 
    UsersModule,
    RoomsModule, 
    LocationsModule, 
    CommentsModule, 
    BookingModule, 
    AuthModule,
    ConfigModule.forRoot(
      {
        isGlobal: true
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
