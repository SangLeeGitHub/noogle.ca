package com.example.springsocial.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springsocial.model.Employer;
import com.example.springsocial.repository.EmployerRepository;

@Service
public class EmployerService {

	@Autowired
	EmployerRepository employerRepository;
	
	public List<Employer> getEmployers(){
		return employerRepository.findAll();
	}
	
	public Employer createEmployer(Employer employer) {
		return employerRepository.save(employer);
	}
}
