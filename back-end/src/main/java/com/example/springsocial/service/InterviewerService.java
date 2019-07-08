package com.example.springsocial.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Employer;
import com.example.springsocial.model.Interviewer;
import com.example.springsocial.repository.EmployerRepository;
import com.example.springsocial.repository.InterviewerRepository;


@Service
public class InterviewerService {

	@Autowired
	InterviewerRepository interviewerRepository;
	
	@Autowired
	EmployerRepository employerRepository;
	
	public List<Interviewer> getAllInterviewers(){
		return interviewerRepository.findAll();
	}
	

	public Optional<Interviewer> getInterviewerById(Long interviewerId) {
		if(!interviewerRepository.existsById(interviewerId)) {
			throw new ResourceNotFoundException("Interviewer", "id", interviewerId);
		}
		return interviewerRepository.findById(interviewerId);
	}
	
	public Interviewer createInterviewer(Long employerId, Interviewer interviewer) {
		Set<Interviewer> interviewers = new HashSet<>();
		Employer employer1 = new Employer();
		
		Optional<Employer> byId = employerRepository.findById(employerId);
		if(!byId.isPresent()) {
			throw new ResourceNotFoundException("Interviewer", "id", employerId);
		}
		
		Employer employer = byId.get();
		//tie Employer to Interviewer
		interviewer.setEmployer(employer);
		
		Interviewer interviewer1 = interviewerRepository.save(interviewer);
		//tie Interviewer to Employer
		interviewers.add(interviewer1);
		employer1.setInterviewers(interviewers);
		
		return interviewer1;
	}
}
