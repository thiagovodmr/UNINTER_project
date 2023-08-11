package com.project.backend.domain.repositorys

import com.project.backend.domain.entitys.Item
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
public interface ItemRepository : JpaRepository<Item, Long>