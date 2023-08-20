package com.project.backend.domain.repositorys

import com.project.backend.application.dtos.QueueDto
import com.project.backend.domain.entitys.Demand
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface DemandRepository : JpaRepository<Demand, Long>{
    @Query("""
        SELECT 
             cl.name as nameClient, 
             sum(price_by_quant) as priceDemand,
             ds.description as status,
             d.order_hash as orderHash
        from demand as d
        INNER JOIN users as cl on d.client_id = cl.id
        INNER JOIN demand_status as ds on d.status_id = ds.id
        WHERE cl.id = :clientId
        GROUP BY cl.name, d.date_demanded, ds.description, d.order_hash
        order by d.date_demanded
    """, nativeQuery = true)
    fun getByUserId(clientId: Long) : List<QueueDto>

    @Query("""
         SELECT 
             cl.name as nameClient, 
             sum(price_by_quant) as priceDemand,
             ds.description as status,
             d.order_hash as orderHash
        from demand as d
        INNER JOIN users as cl on d.client_id = cl.id
        INNER JOIN demand_status as ds on d.status_id = ds.id
        GROUP BY cl.name, d.date_demanded, ds.description, d.order_hash
        order by d.date_demanded
    """, nativeQuery = true)
    fun getAll() : List<QueueDto>


    @Query("""
        select id from demand ORDER BY id DESC;
    """, nativeQuery = true)
    fun findTopByOrderByIdDesc(): Long?
}