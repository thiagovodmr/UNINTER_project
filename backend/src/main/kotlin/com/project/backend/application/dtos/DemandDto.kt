package com.project.backend.application.dtos

import com.project.backend.domain.entitys.Car

data class DemandDto(
    val clientId: Long,
    val items : List<Car>
)
