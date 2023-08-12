package com.project.backend.business.services

import com.project.backend.domain.entitys.Category
import com.project.backend.domain.repositorys.CategoryRepository
import org.springframework.stereotype.Service

@Service
class CategoryService(private val repository : CategoryRepository){
    fun listAll() : List<Category>{
        return this.repository.findAll();
    }
}