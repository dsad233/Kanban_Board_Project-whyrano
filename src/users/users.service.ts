import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepository : Repository<Users>){}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({ where : {}})
    return ;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
