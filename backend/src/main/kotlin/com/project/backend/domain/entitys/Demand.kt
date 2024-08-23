package com.project.backend.domain.entitys

import jakarta.persistence.*
import java.time.LocalDateTime
import java.util.Date

@Entity(name="demand")
class Demand (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id : Long?,

    @Column(name="qtd_changed")
    val qtdchanged: Long,

    @Column(name="price_by_quant")
    val priceByQuant: Double,

    @Column(name = "order_hash")
    val orderHash : String,

    @Column(name = "date_demanded")
    var dateDemanded : LocalDateTime? = LocalDateTime.now(),

    @ManyToOne
    @JoinColumn(name ="client_id")
    val client: User,

    @ManyToOne
    @JoinColumn(name ="item_id")
    val item: Item,

    @ManyToOne
    @JoinColumn(name ="status_id")
    val status: DemandStatus? = null
){
    @PrePersist
    fun prePersist() {
        dateDemanded = LocalDateTime.now()
    }
}