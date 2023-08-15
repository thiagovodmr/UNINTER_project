package com.project.backend.application.controller

import com.project.backend.business.services.CarService
import com.project.backend.domain.entitys.Car
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatusCode
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/car")
class CarController(
    private val service : CarService
){
    @GetMapping("/{id}")
    fun getAll(@PathVariable id : Long) : ResponseEntity<List<Car>>{
        return try {
            val itemsCar = this.service.getItemsCar(id);
            ResponseEntity.ok(itemsCar)
        }catch (e: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }
}