package com.project.backend.application.controller

import com.project.backend.business.services.ItemService
import com.project.backend.domain.entitys.Item
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api/item")
class ItemController(
    private val service: ItemService
){
    @PostMapping
    fun create(
        @RequestParam("image") image: MultipartFile,
        @RequestParam("description") description: String,
        @RequestParam("price") price: Double
    ): ResponseEntity<Item> {
        return try{
            val item = this.service.create(image.bytes, description, price)
            ResponseEntity.ok(item)
        }catch(e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }
}