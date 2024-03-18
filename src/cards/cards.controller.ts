import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common"
import { CardsService } from "./cards.service";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { AuthGuard } from "@nestjs/passport";


@UseGuards(AuthGuard('jwt'))
@Controller("cards")
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  createCard(@Body() createCardDto: CreateCardDto) {
    return this.cardsService.create(createCardDto);
  }

  @Get()
  findAll() {
    return this.cardsService.findAll();
  }

  @Get('')
  async getAllMessages(@Param('teamId') teamId: number) {
    return await this.supportMessageService.getMessagesByTeamId(teamId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cardsService.findOne(+id);
  }

  @Patch(":id")
  updateCard(@Param("id") id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(+id, updateCardDto);
  }

  // 카드 순서변경 & 이동

  
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cardsService.remove(+id);
  }
}
