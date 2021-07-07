package com.example.springsocial.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springsocial.repository.EmployerRepository;
import com.example.springsocial.model.*;
import com.example.springsocial.payload.AddEmployerRequest;

@Service
public class EmployerService {
	
	@Autowired
	EmployerRepository employerRepository;
	
//	public Optional<Employer> getEmployer(String employerName){
//		return employerRepository.findByName(employerName);
//	}
//	
//	public List<Employer> getEmployers(){
//		return employerRepository.findAll();
//	}
	
	public List<Employer> getEmployersByName(String employerName){
		return employerRepository.findByEmployerName(employerName);
	}
	
	public Employer addEmployer(AddEmployerRequest addEmployerRequest) {
		Employer employer = new Employer();
		employer.setName(addEmployerRequest.getName());
		employer.setCity(addEmployerRequest.getCity());
		employer.setProvince(addEmployerRequest.getProvince());
		employer.setCountry(addEmployerRequest.getCountry());
		
		return employerRepository.save(employer);
	}
	
	
}
