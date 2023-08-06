package com.project.backend.application.controller

import com.project.backend.application.`class`.LoginRequest
import com.project.backend.application.dtos.UserDto
import com.project.backend.business.services.UserService
import com.project.backend.domain.entitys.User
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/user")
class UserController (
    private val userService: UserService
){
    @PostMapping("/login")
    fun login(@RequestBody login : LoginRequest) : ResponseEntity<UserDto>{
        return try{
            val result = this.userService.login(login.user, login.password)
            if(result == null){
                ResponseEntity.status(HttpStatus.FORBIDDEN).build()
            } else{
                ResponseEntity.ok(result)
            }
        }catch(e: Exception){
            println(e.message)
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @PostMapping("/create")
    fun create(userDto : UserDto) : ResponseEntity<User>{
        return try{
            val user = this.userService.create(userDto)
            ResponseEntity.ok(user)
        }catch(e: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }

    }
}
