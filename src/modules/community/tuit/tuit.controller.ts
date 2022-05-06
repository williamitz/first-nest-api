import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddTuitDto, UpdateTuitDto } from '../dto';
import { Tuit } from '../models';
import { TuitService } from './tuit.service';

@Controller('tuit')
export class TuitController {
  constructor(private readonly _tuitsvc: TuitService) {}

  @Get()
  getTuitsAll(): Promise<Tuit[]> {
    return this._tuitsvc.getTuits();
  }

  @Get('user/:id')
  getTuitsByUser(@Param('id') id: number): Promise<Tuit[]> {
    return this._tuitsvc.getTuitsByUser(id);
  }

  @Post()
  addTuit(@Body() body: AddTuitDto): Promise<Tuit> {
    return this._tuitsvc.addTuit(body);
  }

  @Put(':id')
  updateTuit(
    @Body() body: UpdateTuitDto,
    @Param('id') id: number,
  ): Promise<Tuit> {
    return this._tuitsvc.updateTuit(body, id);
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: number): Promise<Tuit> {
    return this._tuitsvc.deleteTuit(id);
  }
}
