package com.project.backend.domain.repositorys

import com.project.backend.domain.entitys.Category
import com.project.backend.domain.entitys.Item
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository : JpaRepository<Category, Long>