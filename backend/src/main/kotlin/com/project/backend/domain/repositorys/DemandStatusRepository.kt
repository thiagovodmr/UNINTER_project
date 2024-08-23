package com.project.backend.domain.repositorys

import com.project.backend.domain.entitys.DemandStatus
import org.springframework.context.annotation.Description
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.Optional

@Repository
interface DemandStatusRepository : JpaRepository<DemandStatus, Long>{
    @Query(value = """
        SELECT 
            EXTRACT(DAY FROM d.date_demanded) AS day,
            SUM(d.qtd_changed) AS total_qtd
        FROM 
            demand d 
        WHERE 
            d.status_id = 4
            AND d.date_demanded >= CURRENT_DATE - INTERVAL '30 days'
            AND DATE_TRUNC('month', d.date_demanded) = DATE_TRUNC('month', CURRENT_DATE)
        GROUP BY 
            day
        ORDER BY 
            day
    """, nativeQuery = true)
    fun findSalesCurrentMonth(): List<Map<String, Any>>

    fun findByDescription(description: String) : Optional<DemandStatus>
}