package com.project.backend.business.services

import com.project.backend.application.dtos.UserDto
import com.project.backend.business.mappers.UserMapper
import com.project.backend.domain.entitys.User
import com.project.backend.domain.repositorys.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val userMapper: UserMapper
){

    fun login(username: String, password: String): UserDto? {
        val user = userRepository.findByNameAndPassword(username, password)
        return user?.let(userMapper::entityToDto)
    }

    fun create(userDto: UserDto) : User{
        val user = userMapper.dtoToEntity(userDto)
        return this.userRepository.save(user)
    }
}