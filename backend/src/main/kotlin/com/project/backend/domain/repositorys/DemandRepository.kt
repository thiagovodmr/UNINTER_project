package com.project.backend.domain.repositorys

import com.project.backend.application.dtos.QueueDto
import com.project.backend.domain.entitys.Demand
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface DemandRepository : JpaRepository<Demand, Long>{
    @Query("""
        SELECT cl.name as nameClient, 
        sum(price_by_quant) as priceDemand 
        from demand as d
        INNER JOIN users as cl on d.client_id = cl.id
        WHERE cl.id = :clientId
        GROUP BY cl.name, d.date_demanded
        order by d.date_demanded
    """, nativeQuery = true)
    fun getByUserId(clientId: Long) : List<QueueDto>

    @Query("""
        SELECT cl.name as nameClient, 
        sum(price_by_quant) as priceDemand 
        from demand as d
        INNER JOIN users as cl on d.client_id = cl.id
        GROUP BY cl.name, d.date_demanded
        order by d.date_demanded
    """, nativeQuery = true)
    fun getAll() : List<QueueDto>
}