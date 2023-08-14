package com.project.backend.business.mappers

import com.project.backend.application.dtos.UserDto
import com.project.backend.application.dtos.UserLoginDto
import com.project.backend.domain.entitys.User
import org.springframework.stereotype.Service

@Service
class UserMapper{
    fun entityToDto(user : User) : UserDto{
        return UserDto(
            user.name,
            user.password,
            user.role
        )
    }

    fun entityToLoginDto(user: User) : UserLoginDto{
        return UserLoginDto(
            user.id!!,
            user.name,
            user.role
        )
    }

    fun dtoToEntity(userDto: UserDto) : User{
        return User(
            name = userDto.name,
            password = userDto.password,
            role = "CLIENT"
        )
    }
}