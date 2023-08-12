package com.project.backend.application.controller

import com.project.backend.business.services.CategoryService
import com.project.backend.domain.entitys.Category
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

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
}