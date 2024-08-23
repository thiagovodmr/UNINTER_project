package com.project.backend.application.controller

import com.project.backend.application.dtos.ItemDTO
import com.project.backend.application.dtos.graphics.SalesForMonthDTO
import com.project.backend.business.services.DemandStatusService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/graphics")
class GraphicsController(
    private val demandStatusService: DemandStatusService
){
    @GetMapping("/sales/current-month")
    fun getSalesCurrentMonth(): List<SalesForMonthDTO> {
        return demandStatusService.getSalesCurrentMonth();
    }
}