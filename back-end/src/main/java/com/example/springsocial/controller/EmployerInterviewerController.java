package com.example.springsocial.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import com.example.springsocial.model.Employer;
import com.example.springsocial.model.Interviewer;
import com.example.springsocial.payload.ApiResponse;
import com.example.springsocial.payload.CreateEmployerRequest;
import com.example.springsocial.payload.CreateInterviewerRequest;
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
	
//	
//	@PostMapping("/createEmployer")
////	@RequestMapping(value="/createEmployer", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
//	public Employer createEmployer(@RequestBody Employer employer) {
//		System.out.println("============/api/createemployer");
//		return employerService.createEmployer(employer);
//	}
//	
	
//	@PostMapping("/createEmployer")
//	public Employer createEmployer(@Valid @RequestBody CreateEmployerRequest createEmployRequest) {
//		return employerService.createEmployer(createEmployRequest);
//	}
	
	@PostMapping("/createEmployer")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> createEmployer(@RequestBody CreateEmployerRequest createEmployerRequest) {
        Employer employer = employerService.createEmployer(createEmployerRequest);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("getAllEmployers")
                .buildAndExpand(employer.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Employer Created Successfully@"));
    }
	
	
	
	@GetMapping("/getAllInterviewers")
	public List<Interviewer> getInterviewers(){
		return interviewerService.getAllInterviewers();
	}
	
//	@PostMapping("/{employerId}/createInterviewer")
//	public Interviewer createInterviewer(@PathVariable(value="employerId") Long employerId, @RequestBody Interviewer interviewer) {
//		return interviewerService.createInterviewer(employerId, interviewer);
//	}
//	
	
	@PostMapping("/{employerId}/createInterviewer")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> createInterviewer(@PathVariable(value="employerId") Long employerId, @RequestBody CreateInterviewerRequest createInterviewerRequest) {
        Interviewer interviewer = interviewerService.createInterviewer(employerId, createInterviewerRequest);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("getAllInterviewers")
                .buildAndExpand(interviewer.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Interviewer Created Successfully@"));
    }
	
	
	
	
	@GetMapping("/interviewer/{interviewerId}")
	public Optional<Interviewer> getInterviewerById(@PathVariable(value="interviewerId") Long interviewerId){
		return interviewerService.getInterviewerById(interviewerId);
	}
	
	
	@GetMapping("/employer/{employerName}")
	public List<Employer> getEmployerByName(@PathVariable(value="employerName") String employerName){
		return employerService.getEmployersByName(employerName);
	}
	
}
