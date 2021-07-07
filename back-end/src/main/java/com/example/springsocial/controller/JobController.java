package com.example.springsocial.controller;

import com.example.springsocial.model.Job;
import com.example.springsocial.payload.AddNewJobRequest;
import com.example.springsocial.payload.ApiResponse;
import com.example.springsocial.repository.JobRepository;
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
public class JobController {
	
    @Autowired
    EmployerService employerService;
    
    @Autowired
    JobService jobService;
    
    @Autowired
    JobRepository jobRepository;
    
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{userId}/job")
    public List<Job> getJobList(@PathVariable(value="userId") Long userId) {

    	//System.out.println("----------------------- /{userID}/job");

        return jobService.getJobsByUserId(userId);
        		
    }
    
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/{userId}/{employerId}/addNewJob")
    public ResponseEntity<?> addNewJob(@PathVariable(value="userId") Long userId,
    		@PathVariable(value="employerId") Long employerId, @RequestBody AddNewJobRequest addNewJobRequest){
    	Job job = jobService.addNewJob(userId, employerId, addNewJobRequest);
    	
    	URI location = ServletUriComponentsBuilder
    			.fromCurrentRequest().path("getAllJobs")
    			.buildAndExpand(job.getJobId()).toUri();
    	
    	return ResponseEntity.created(location)
    			.body(new ApiResponse(true, "Job Created Successfully@"));
    }
    
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
