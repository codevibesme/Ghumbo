import { OmitType, PickType } from "@nestjs/swagger";
import { UserEntity } from "../../entities/users.entity.js";

export class UserDto extends UserEntity {}

export class UserDetailsDto extends PickType(UserDto, ['id', 'firstName', 'lastName', 'email', 'phone']) {}

export class CreateUserDto extends OmitType(UserDto, ['id', 'createdAt', 'updatedAt', 'documents']) {}

export class UpdateUserDto extends OmitType(CreateUserDto, ['email', 'role']) {}