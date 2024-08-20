package com.project.backend.domain.repositorys

import com.project.backend.domain.entitys.DemandStatus
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DemandStatusRepository : JpaRepository<DemandStatus, Long>