package com.project.backend.business.services

import com.project.backend.domain.entitys.Car
import com.project.backend.domain.repositorys.CarRepository
import com.project.backend.domain.repositorys.ItemRepository
import com.project.backend.domain.repositorys.UserRepository
import org.springframework.stereotype.Service

@Service
class CarService(
    private val repository: CarRepository,
    private val userRepository: UserRepository,
    private val itemRepository: ItemRepository
) {
    fun createItemCar(clientId : Long, itemId: Long) : Car{
        val user = this.userRepository.findById(clientId).orElseThrow()
        val item = this.itemRepository.findById(itemId).orElseThrow()

        val car = Car(null, user, item)
        return this.repository.save(car)
    }

    fun getItemsCar(userId : Long) : List<Car>{
        return this.repository.findByUserId(userId)
    }
}