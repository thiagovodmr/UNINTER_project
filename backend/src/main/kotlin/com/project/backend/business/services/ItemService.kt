package com.project.backend.business.services

import com.project.backend.application.dtos.ItemDTO
import com.project.backend.business.mappers.ItemMapper
import com.project.backend.domain.entitys.Category
import com.project.backend.domain.entitys.Item
import com.project.backend.domain.repositorys.CategoryRepository
import com.project.backend.domain.repositorys.ItemRepository
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile


@Service
class ItemService(
    private val repository: ItemRepository,
    private val categoryRepository: CategoryRepository,
    private val mapper: ItemMapper

){
    fun create(image: ByteArray, description: String, price: Double, categoryId: Long): Item{
        val category = categoryRepository.findById(categoryId).orElseThrow()

        val item = Item(null, description, price, image, category)
        return this.repository.save(item)
    }

    fun list() : List<ItemDTO>{
        return this.repository.findAll().map {
            this.mapper.entityToDto(it)
        }
    }

    fun listByCategory(categoryId: Long) : List<ItemDTO>{
        return this.repository.findByCategory(categoryId).map {
            this.mapper.entityToDto(it)
        }
    }
}