package com.project.backend.application.dtos

data class UserDto(
    val name: String,
    val password: String,
    val role: String? = "CLIENT"
)