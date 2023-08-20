package com.project.backend.application.dtos

interface QueueDto {
    val nameClient: String
    val priceDemand: Double
    val status: String
    val orderHash : String
}
