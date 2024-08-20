package com.project.backend.domain.repositorys

import com.project.backend.domain.entitys.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
public interface UserRepository : JpaRepository<User, Long>{

    fun findByEmailAndPassword(email: String, password: String) : User?
}