package com.example.springsocial.controller;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.springsocial.model.Employer;
import com.example.springsocial.model.Interviewer;
import com.example.springsocial.payload.AddEmployerRequest;
import com.example.springsocial.payload.AddInterviewerRequest;
import com.example.springsocial.payload.ApiResponse;
import com.example.springsocial.service.*;


@RestController
@RequestMapping("/api")
public class EmployerInterviewerController {

	@Autowired
	EmployerService employerService;
	
	@Autowired
	InterviewerService interviewerService;
	
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/searchEmployer/{employerName}")
    public List<Employer> getEmployersByName(@PathVariable(value="employerName") String employerName) {
    	System.out.println("-------" + employerName);
    	return employerService.getEmployersByName(employerName);
    	
    } 
    
    @PostMapping("/addEmployer")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> addEmployer(@RequestBody AddEmployerRequest addEmployerRequest){
    	Employer employer = employerService.addEmployer(addEmployerRequest);
    	
    	URI location = ServletUriComponentsBuilder
    			.fromCurrentRequest().path("getAllEmployers")
    			.buildAndExpand(employer.getId()).toUri();
    	
    	return ResponseEntity.created(location)
    			.body(new ApiResponse(true, "Employer Created Successfully@"));
    }
    
    @PostMapping("/{employerId}/addInterviewer")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> addInterviewer(@PathVariable(value="employerId") Long employerId, @RequestBody AddInterviewerRequest addInterviewerRequest){
    	Interviewer interviewer = interviewerService.addInterviewer(employerId, addInterviewerRequest);
    	
    	URI location = ServletUriComponentsBuilder
    			.fromCurrentRequest().path("getAllInterviewers")
    			.buildAndExpand(interviewer.getId()).toUri();
    	
    	return ResponseEntity.created(location)
    			.body(new ApiResponse(true, "Interviewer Created Successfully@"));
    }
}
