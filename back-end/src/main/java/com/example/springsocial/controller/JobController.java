package com.example.springsocial.controller;

import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.AuthProvider;
import com.example.springsocial.model.Job;
import com.example.springsocial.model.User;
import com.example.springsocial.payload.ApiResponse;
import com.example.springsocial.payload.AuthResponse;
import com.example.springsocial.payload.CreateJobRequest;
import com.example.springsocial.payload.JobListRequest;
import com.example.springsocial.repository.UserRepository;



import com.example.springsocial.service.EmployerService;
import com.example.springsocial.service.JobService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api")
public class JobController{
	
	@Autowired
	EmployerService employerService;
	
//    @Autowired
//    private JobRepository jobRepository;

	@Autowired
	JobService jobService;
	
    @Autowired
    private UserRepository userRepository;
	
/*    Old Method
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/job")
    public List<Job> getJobList() {
    	System.out.println("----------------------- /job");
        return jobService.getAllJobs();
        		//.orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
  
    */
	
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{userId}/job")
    public List<Job> getJobList(@PathVariable(value="userId") Long userId) {

    	System.out.println("----------------------- /{userID}/job");

        return jobService.getJobsByUserId(userId);
        		//.orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
	
    @PreAuthorize("hasRole('USER')")
	@PostMapping("/{userId}/{employerId}/createJob")
	public ResponseEntity<?> createJob(@PathVariable(value="userId") Long userId, 
			@PathVariable(value="employerId") Long employerId, @RequestBody CreateJobRequest createJobRequest){
		
    	Job job = jobService.createJob(userId, employerId, createJobRequest);
    	
    	URI location = ServletUriComponentsBuilder
    			.fromCurrentRequest().path("getAllJobs")
    			.buildAndExpand(job.getJobId()).toUri();
		    	
    	return ResponseEntity.created(location)
    			.body(new ApiResponse(true, "Job Created Successfully@"));
	}
    
//    @PreAuthorize("hasRole('USER')")
//	@PostMapping("/createjob")
//	public ResponseEntity<?> registerJob(@Valid @RequestBody CreateJobRequest createJobRequest) {
////	    if(jobRepository.existsByEmail(signUpRequest.getEmail())) {
////	        throw new BadRequestException("Email address already in use.");
////	    }
//    	System.out.println("----------------------- /job/createJob");
//  
//
//	    // Creating job
//	    Job_old job = new Job_old();
//	    
//	    job.setPosition(createJobRequest.getPosition());
//	    job.setcId(createJobRequest.getcId());
//	    job.setDescription(createJobRequest.getDescription());
//	    job.setUrl(createJobRequest.getUrl());
//	    job.setuId(createJobRequest.getuId());
//	    
//	    Job_old result = jobRepository.save(job);
//
//	    URI location = ServletUriComponentsBuilder
//	            .fromCurrentContextPath().path("/")
//	            .buildAndExpand(result.getJobId()).toUri();
//
//	    return ResponseEntity.created(location)
//	            .body(new ApiResponse(true, "Job added successfully@"));
//	}

    
    
    
}





/*
package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}
*/
