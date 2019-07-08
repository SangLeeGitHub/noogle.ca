package com.example.springsocial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springsocial.model.Employer;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, Long> {

}
