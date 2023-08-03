package com.project.backend.application.controller

import com.project.backend.application.`class`.LoginRequest
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/user")
class UserController {
    @PostMapping("/login")
    fun login(@RequestBody login : LoginRequest) : ResponseEntity<Boolean>{
        return if(login.user == "admin" && login.password == "1234"){
            ResponseEntity.ok(true)
        }else{
            ResponseEntity.ok(false)
        }

    }
}
