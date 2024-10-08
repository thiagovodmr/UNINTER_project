package com.project.backend.domain.repositorys

import com.project.backend.domain.entitys.Item
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
public interface ItemRepository : JpaRepository<Item, Long>{
    @Query("""
        select * from items 
        where category_id = :categoryId
    """, nativeQuery = true)
    fun findByCategory(categoryId: Long) : List<Item>
}