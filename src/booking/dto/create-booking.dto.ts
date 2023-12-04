import { ApiProperty } from "@nestjs/swagger";

const data: Date = new Date();

const ioString: string = data.toISOString();

export class CreateBookingDto {
    @ApiProperty({ description: 'room_id', type: Number})
    room_id: number;

    @ApiProperty({ description: 'check_in', type: ioString})
    check_in: string;

    @ApiProperty({ description: 'check_out', type: ioString})
    check_out: string;

    @ApiProperty({ description: 'no_client', type: Number})
    no_client: number;

    @ApiProperty({ description: 'user_id', type: Number})
    user_id: number
}
