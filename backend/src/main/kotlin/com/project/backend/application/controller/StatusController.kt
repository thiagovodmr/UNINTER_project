package com.project.backend.application.controller

import com.project.backend.business.services.DemandStatusService
import com.project.backend.domain.entitys.DemandStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/status")
class StatusController(
    private val demandStatusService: DemandStatusService
){

    @GetMapping
    fun getAll(): List<DemandStatus>{
        return demandStatusService.getAllStatus()
    }
}