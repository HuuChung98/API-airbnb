import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('api/locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post('create')
  createLocation(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.createLocation(createLocationDto);
  }

  @Get()
  getLocation() {
    return this.locationsService.getLocation();
  }

  @Get('pagination')
  paginationLocation(@Query('size') size: String, @Query('index') index: String, @Query('keyword') keyword: String) {
    return this.locationsService.paginationLocation(+size, +index, keyword);
  }

  @Get(':id')
  getLocationById(@Param('id') id: string) {
    return this.locationsService.getLocationById(+id);
  }

  @Patch('update/:id')
  updateLocation(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationsService.updateLocation(+id, updateLocationDto);
  }

  @Delete('remove/:id')
  removeLocation(@Param('id') id: string) {
    return this.locationsService.removeLocation(+id);
  }
}
