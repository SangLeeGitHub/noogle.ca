package com.example.springsocial.service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Employer;
import com.example.springsocial.model.Interviewer;
import com.example.springsocial.payload.AddInterviewerRequest;
import com.example.springsocial.repository.EmployerRepository;
import com.example.springsocial.repository.InterviewerRepository;

@Service
public class InterviewerService {
	@Autowired
	InterviewerRepository interviewerRepository;
	
	@Autowired
	EmployerRepository employerRepository;
	
	public Interviewer addInterviewer(Long employerId, AddInterviewerRequest addInterviewerRequest) {
		Set<Interviewer> interviewers = new HashSet<>();
		Employer employer1 = new Employer();
		
		Optional<Employer> employerById = employerRepository.findById(employerId);
		if(!employerById.isPresent()) {
			throw new ResourceNotFoundException("Employer", "id", employerId);
		}
		
		Employer employer = employerById.get();
		
		Interviewer interviewer = new Interviewer();
		interviewer.setName(addInterviewerRequest.getName());
		interviewer.setEmail(addInterviewerRequest.getEmail());
		interviewer.setResponsibility(addInterviewerRequest.getResponsibility());
		interviewer.setPhone(addInterviewerRequest.getPhone());
		interviewer.setDept(addInterviewerRequest.getDept());
		
		//tie employer to Interviewer
		interviewer.setEmployer(employer);
		
		Interviewer interviewer1 = interviewerRepository.save(interviewer);
		
		//tie interviewer to employer
		interviewers.add(interviewer1);
		employer1.setInterviewers(interviewers);
		
		return interviewer1;
		
		
	}
}
