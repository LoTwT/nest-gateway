import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common"
import { UserService } from "./user.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import { ConfigService } from "@nestjs/config"

@Controller({
  path: "user",
  version: "1",
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id)
  }

  @Get("getTestName")
  getTestName() {
    return this.configService.get("TEST_VALUE").name
  }
}
