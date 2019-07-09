package com.example.springsocial.service;

import java.time.Duration;
import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.springsocial.model.Employer;
import com.example.springsocial.payload.CreateEmployerRequest;
import com.example.springsocial.repository.EmployerRepository;

@Service
public class EmployerService {

	@Autowired
	EmployerRepository employerRepository;
	
	public List<Employer> getEmployers(){
		return employerRepository.findAll();
	}
	
	public Employer createEmployer(CreateEmployerRequest createEmployerRequest) {
		
		Employer employer = new Employer();
		employer.setName(createEmployerRequest.getName());
		employer.setCity(createEmployerRequest.getCity());
		employer.setProvince(createEmployerRequest.getProvince());
		employer.setCountry(createEmployerRequest.getCountry());
//		employer.setInterviewers(createEmployerRequest.getInterviewers());
//        pollRequest.getChoices().forEach(choiceRequest -> {
//            poll.addChoice(new Choice(choiceRequest.getText()));
//        });

//        Instant now = Instant.now();
//        Instant expirationDateTime = now.plus(Duration.ofDays(pollRequest.getPollLength().getDays()))
//                .plus(Duration.ofHours(pollRequest.getPollLength().getHours()));

//        poll.setExpirationDateTime(expirationDateTime);

        return employerRepository.save(employer);
	}
}
