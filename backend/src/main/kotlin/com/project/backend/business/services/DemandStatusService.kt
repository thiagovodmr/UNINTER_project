package com.project.backend.business.services

import com.project.backend.application.dtos.graphics.SalesForMonthDTO
import com.project.backend.domain.repositorys.DemandStatusRepository
import org.springframework.stereotype.Service
import java.math.BigDecimal

@Service
class DemandStatusService(
    private val demandStatusRepository: DemandStatusRepository
) {
    fun getSalesCurrentMonth(): List<SalesForMonthDTO> {
        val results = demandStatusRepository.findSalesCurrentMonth()

        return results.map {
            val day = (it["day"] as BigDecimal).toInt()
            val totalQtd = (it["total_qtd"] as BigDecimal).toInt()
            SalesForMonthDTO(day, totalQtd)
        }
    }
}