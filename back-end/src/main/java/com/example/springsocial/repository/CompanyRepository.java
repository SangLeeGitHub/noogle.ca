package com.example.springsocial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springsocial.model.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}
