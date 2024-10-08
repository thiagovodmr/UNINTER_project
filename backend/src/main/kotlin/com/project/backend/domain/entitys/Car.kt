package com.project.backend.domain.entitys

import jakarta.persistence.*

@Entity(name="car")
class Car (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id : Long?,

    @Column
    val qtd: Long,

    @Column
    val price: Double,

    @ManyToOne
    @JoinColumn(name ="id_client")
    val client: User,

    @ManyToOne
    @JoinColumn(name ="id_item")
    val item: Item
)