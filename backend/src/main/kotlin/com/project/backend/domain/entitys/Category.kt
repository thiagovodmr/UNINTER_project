package com.project.backend.domain.entitys

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity(name="category")
class Category (
    @Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id : Long?,
    val description : String
)