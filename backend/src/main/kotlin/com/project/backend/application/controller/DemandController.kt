package com.project.backend.application.controller

import com.project.backend.application.dtos.DemandDto
import com.project.backend.application.dtos.QueueDto
import com.project.backend.application.dtos.QueueStatusDto
import com.project.backend.business.services.DemandService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/demand")
class DemandController(
    private val service: DemandService
){
    @PostMapping
    fun post(@RequestBody demand : DemandDto) : ResponseEntity<Boolean>{
        return try {
            val result = this.service.create(demand)
            ResponseEntity.ok().body(result)
        }catch (e : Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping
    fun put(@RequestBody queue : QueueStatusDto) : ResponseEntity<Boolean>{
        return try {
            val result = this.service.updateStatus(queue)
            ResponseEntity.ok().body(result)
        }catch (e : Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{clientId}")
    fun get(@PathVariable clientId : Long) : ResponseEntity<List<QueueDto>>{
        return try {
            val result = this.service.getAll(clientId)
            ResponseEntity.ok().body(result)

        }catch (e: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }
}