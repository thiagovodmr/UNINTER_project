package com.project.backend.application.controller

import com.project.backend.application.dtos.CategoryDTO
import com.project.backend.application.dtos.DemandDto
import com.project.backend.business.services.CategoryService
import com.project.backend.domain.entitys.Category
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/category")
class CategoryController(private val service: CategoryService){
    @GetMapping
    fun listAll() : ResponseEntity<List<Category>>{
        return try{
            val categories = this.service.listAll()
            ResponseEntity.ok(categories)
        }catch(e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @PostMapping
    fun post(@RequestBody category : CategoryDTO) : ResponseEntity<Boolean>{
        return try {
            val result = this.service.create(category)
            ResponseEntity.ok().body(result)
        }catch (e : Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}