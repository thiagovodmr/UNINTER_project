package com.project.backend.application.dtos

data class ItemDTO(
    val id: Long,
    val image: String,
    val description: String,
    val price: Double
)
