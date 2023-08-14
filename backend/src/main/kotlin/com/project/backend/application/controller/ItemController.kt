package com.project.backend.application.controller

import com.project.backend.application.dtos.CarDto
import com.project.backend.application.dtos.ItemDTO
import com.project.backend.business.services.CarService
import com.project.backend.business.services.ItemService
import com.project.backend.domain.entitys.Car
import com.project.backend.domain.entitys.Category
import com.project.backend.domain.entitys.Item
import jakarta.websocket.server.PathParam
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api/item")
class ItemController(
    private val service: ItemService,
    private val carService: CarService
){
    @PostMapping
    fun create(
        @RequestParam("image") image: MultipartFile,
        @RequestParam("description") description: String,
        @RequestParam("price") price: Double,
        @RequestParam("category_id") categoryId: Long
    ): ResponseEntity<Item> {
        return try{
            val item = this.service.create(image.bytes, description, price, categoryId)
            ResponseEntity.ok(item)
        }catch(e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @PostMapping("/car")
    fun create(
       @RequestBody car : CarDto
    ): ResponseEntity<Car> {
        return try{
            val item = this.carService.createItemCar(car.clientId, car.itemId)
            ResponseEntity.ok(item)
        }catch(e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @GetMapping
    fun listAll() : ResponseEntity<List<ItemDTO>>{
        return try{
            val items = this.service.list()
            ResponseEntity.ok(items)
        }catch(e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @GetMapping("/byCategory/{categoryId}")
    fun listByCategory(@PathVariable categoryId: Long) : ResponseEntity<List<ItemDTO>>{
        return try{
            val items = this.service.listByCategory(categoryId)
            ResponseEntity.ok(items)
        }catch(e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }
}