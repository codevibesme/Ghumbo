import { Injectable, NotFoundException } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { UserRepository } from "./users.repository.js";
import { CreateUserDto, UpdateUserDto, UserDto } from "./users.dto.js";

@Injectable()
export class UserService {
    constructor(
        private readonly repo: UserRepository
    ) {}

    async create(record: CreateUserDto, txn?: EntityManager): Promise<UserDto> {
        return await this.repo.create(record, txn);
    }

    async findById(id: string): Promise<UserDto | null> {
        return await this.repo.findById(id);
    }

    async findByIdOrThrow(id: string): Promise<UserDto> {
        const user = await this.repo.findById(id);
        if(!user) throw new NotFoundException("User not found.");

        return user;
    }

    async update(id: string, record: UpdateUserDto, txn?: EntityManager): Promise<void> {
        await this.repo.update(id, record, txn);
    }
}