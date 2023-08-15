package com.project.backend.domain.repositorys

import com.project.backend.domain.entitys.Car
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CarRepository  : JpaRepository<Car, Long>{
    @Query("""
        SELECT * from car where id_client = :clientId
    """, nativeQuery = true)
    fun findByUserId(clientId: Long) : List<Car>
}