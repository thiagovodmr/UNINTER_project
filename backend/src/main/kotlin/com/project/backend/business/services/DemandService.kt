package com.project.backend.business.services

import com.project.backend.application.dtos.DemandDto
import com.project.backend.application.dtos.QueueDto
import com.project.backend.application.dtos.QueueStatusDto
import com.project.backend.domain.entitys.Demand
import com.project.backend.domain.repositorys.CarRepository
import com.project.backend.domain.repositorys.DemandRepository
import com.project.backend.domain.repositorys.DemandStatusRepository
import com.project.backend.domain.repositorys.UserRepository
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class DemandService(
    private val repository : DemandRepository,
    private val userRepository: UserRepository,
    private val carRepository: CarRepository,
    private val statusRepository: DemandStatusRepository
){
    @Transactional
    fun create(demand : DemandDto) : Boolean{
        val client = this.userRepository.findById(demand.clientId).orElseThrow()
        var lastId = this.repository.findTopByOrderByIdDesc()
        val statusDemand = this.statusRepository.findById(1L).orElseThrow()

        if(lastId == null){
            lastId = 1L
        }else{
            lastId += 1L
        }

        val hash = generateOrderCode(lastId)

        if(demand.items.isNotEmpty()){
            demand.items.forEach{
                val newDemand = Demand(
                    id = null,
                    priceByQuant = it.price,
                    qtdchanged = it.qtd,
                    client = client,
                    item = it.item,
                    orderHash = hash,
                    status = statusDemand
                )
                this.repository.save(newDemand)
            }

            demand.items.forEach{
                this.carRepository.deleteById(it.id!!)
            }
        }

        return true
    }

    fun getAll(clientId : Long) : List<QueueDto>{
        val user = this.userRepository.findById(clientId).orElseThrow()
        return if(user.role == "ADMIN"){
            this.repository.getAll()
        }else{
            this.repository.getByUserId(clientId)
        }
    }

    private fun generateOrderCode(orderId: Long): String {
        val orderString = "ORD${String.format("%04d", orderId.toInt())}"
        val randomSuffix = (1000..9999).random() // Gera um número aleatório de 4 dígitos
        return "$orderString$randomSuffix"
    }

    fun updateStatus(queueDto: QueueStatusDto) : Boolean{
        val demand = this.repository.findByOrder(queueDto.orderHash).orElseThrow()
        val status = this.statusRepository.findByDescription(queueDto.status).orElseThrow()

        demand.status = status
        demand.dateStatusChanged = LocalDateTime.now()

        this.repository.save(demand)
        return true
    }

}