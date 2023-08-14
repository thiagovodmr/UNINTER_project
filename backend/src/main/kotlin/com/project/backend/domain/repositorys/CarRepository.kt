package com.project.backend.domain.repositorys

import com.project.backend.domain.entitys.Car
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CarRepository  : JpaRepository<Car, Long>{
}