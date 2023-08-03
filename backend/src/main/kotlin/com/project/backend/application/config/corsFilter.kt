package com.project.backend.application.config

import jakarta.servlet.Filter
import jakarta.servlet.FilterChain
import jakarta.servlet.FilterConfig
import jakarta.servlet.ServletRequest
import jakarta.servlet.ServletResponse
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.core.Ordered
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
class CorsFilter : Filter {
    override fun doFilter(req: ServletRequest, res: ServletResponse, chain: FilterChain ) {
        val response = res as HttpServletResponse
        val request = req as HttpServletRequest

        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE")
        response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type")
        response.setHeader("Access-Control-Max-Age", "3600")

        if ("OPTIONS" != request.method) {
            chain.doFilter(req, res)
        } else {
            response.status = HttpServletResponse.SC_OK
        }
    }

    override fun init(filterConfig: FilterConfig) {}
    override fun destroy() {}
}
