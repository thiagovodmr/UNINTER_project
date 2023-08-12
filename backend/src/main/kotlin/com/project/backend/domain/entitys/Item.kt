package com.project.backend.domain.entitys

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Lob
import org.hibernate.annotations.Type

@Entity(name="items")
class Item(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = 0,
    val description: String,
    val price: Double,

    @Column(name = "image", columnDefinition = "BINARY")
    val image: ByteArray
)