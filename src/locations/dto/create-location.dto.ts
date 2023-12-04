import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDto {
    
    @ApiProperty({ description: 'location', type: String })
    name_location: string;
    
    @ApiProperty({ description: 'province', type: String })
    province: string;

    @ApiProperty({ description: 'nation', type: String })
    nation: string;
    
    @ApiProperty({ description: 'image', type: String })
    image: string;

}
