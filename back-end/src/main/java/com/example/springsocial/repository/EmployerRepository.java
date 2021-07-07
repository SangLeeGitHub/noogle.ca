package com.example.springsocial.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springsocial.model.Employer;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, Long> {
	//Optional<Employer> findByName(String employerName);
	@Query("select e from Employer e where e.name like %?1%")
	List<Employer> findByEmployerName(String employerName);
	
	//List<Employer> findAll();
}
