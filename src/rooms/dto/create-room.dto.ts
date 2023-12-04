import { ApiProperty } from "@nestjs/swagger";


export class CreateRoomDto {
    @ApiProperty({ description: 'roomName', type: String})
    room_name: string;

    @ApiProperty({ description: 'client', type: Number})
    client: number;

    @ApiProperty({ description: 'bedroom', type: Number})
    bedroom: number;

    @ApiProperty({ description: 'bed', type: Number})
    bed: number;

    @ApiProperty({ description: 'bathroom', type: Number})
    bathroom: number;

    @ApiProperty({ description: "describe", type: String})
    description: number;

    @ApiProperty({ description: 'price', type: Number})
    price: number;

    @ApiProperty({ description: 'washing machine', type: Boolean})
    washing_machine: boolean;

    @ApiProperty({ description: 'iron', type: Boolean})
    iron: boolean;

    @ApiProperty({ description: 'tivi', type: Boolean})
    tivi: boolean;

    @ApiProperty({ description: 'air condition', type: Boolean})
    air_condition: boolean;

    @ApiProperty({ description: 'wifi', type: Boolean})
    wifi: boolean;

    @ApiProperty({ description: 'kitchen', type: Boolean})
    kitchen: boolean;

    @ApiProperty({ description: 'parking', type: Boolean})
    parking: boolean;

    @ApiProperty({ description: 'pool', type: Boolean})
    pool: boolean;

    @ApiProperty({ description: 'image', type: String})
    image: string

    @ApiProperty({ description: 'location', type: Number})
    location_id: number;

}
