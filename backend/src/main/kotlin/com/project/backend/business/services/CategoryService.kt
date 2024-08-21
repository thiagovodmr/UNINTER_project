package com.project.backend.business.services

import com.project.backend.application.dtos.CategoryDTO
import com.project.backend.domain.entitys.Category
import com.project.backend.domain.repositorys.CategoryRepository
import org.springframework.stereotype.Service

@Service
class CategoryService(private val repository : CategoryRepository){
    fun listAll() : List<Category>{
        return this.repository.findAll();
    }

    fun create(categoryDTO: CategoryDTO): Boolean{
        val newCategory = Category(null, description = categoryDTO.description)
        this.repository.save(newCategory)
        return true
    }
}