package com.example.springsocial.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.springsocial.model.Employer;
import com.example.springsocial.model.Interviewer;

import com.example.springsocial.service.EmployerService;
import com.example.springsocial.service.InterviewerService;

@RestController
@RequestMapping("/api")
public class EmployerInterviewerController {

	@Autowired
	EmployerService employerService;
	
	@Autowired
	InterviewerService interviewerService;
	
	//Employer
//	@GetMapping("/getAllEmployers")
	@RequestMapping(value="/getAllEmployers", method = RequestMethod.GET)
	public List<Employer> getEmployers(){
		return employerService.getEmployers();
	}
	
	
	@PostMapping("/createEmployer")
//	@RequestMapping(value="/createEmployer", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public Employer createEmployer(@RequestBody Employer employer) {
		System.out.println("============/api/createemployer");
		return employerService.createEmployer(employer);
	}
	
	
//	@PostMapping("/createEmployer")
//	public Employer createEmployer(@Valid @RequestBody CreateEmployRequest createEmployRequest) {
//		return employerService.createEmployer(employer);
//	}
	
	
	@GetMapping("/getAllInterviewers")
	public List<Interviewer> getInterviewers(){
		return interviewerService.getAllInterviewers();
	}
	
	@PostMapping("/{employerId}/createInterviewer")
	public Interviewer createInterviewer(@PathVariable(value="employerId") Long employerId, @RequestBody Interviewer interviewer) {
		return interviewerService.createInterviewer(employerId, interviewer);
	}
	
	@GetMapping("/interviewer/{interviewerId}")
	public Optional<Interviewer> getInterviewerById(@PathVariable(value="interviewerId") Long interviewerId){
		return interviewerService.getInterviewerById(interviewerId);
	}
	
	
}