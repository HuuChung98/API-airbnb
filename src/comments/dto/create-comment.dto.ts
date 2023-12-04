import { ApiProperty } from "@nestjs/swagger";

const date: Date = new Date();

const isoString: string = date.toISOString();

export class CreateCommentDto {
    @ApiProperty({ description: 'room_id', type: Number})
    room_id: number;

    @ApiProperty({ description: 'user_id', type: Number})
    user_id: number;

    @ApiProperty({ description: 'date time', type: isoString})
    datetime_cmt: string;

    @ApiProperty({ description: 'content', type: String})
    text: string;

    @ApiProperty({ description: 'star', type: Number})
    star_cmt: string;

}
