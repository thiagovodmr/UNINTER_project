package com.project.backend.domain.entitys

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity(name = "users")
class User (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id : Long?,
    val name: String,
    val email: String,
    val password : String,
    val role : String
) {
    // Construtor secundário sem o ID como parâmetro
    constructor(name: String, email: String, password: String, role: String) :
            this(null, name, email, password, role)
}