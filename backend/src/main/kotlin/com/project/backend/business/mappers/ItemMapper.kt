package com.project.backend.business.mappers

import com.project.backend.application.dtos.ItemDTO
import com.project.backend.domain.entitys.Item
import org.springframework.stereotype.Service
import java.util.Base64

@Service
class ItemMapper {
    fun entityToDto(entity : Item): ItemDTO{
        val base64Image = Base64.getEncoder().encodeToString(entity.image)
        val imageDataUrl = "data:image/jpeg;base64,$base64Image"

        return ItemDTO(
            entity.id!!,
            imageDataUrl,
            entity.description,
            entity.price
        )
    }
}