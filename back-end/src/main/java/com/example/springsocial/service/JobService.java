package com.example.springsocial.service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Employer;
import com.example.springsocial.model.Job;
import com.example.springsocial.model.User;
import com.example.springsocial.payload.CreateJobRequest;
import com.example.springsocial.payload.JobListRequest;
import com.example.springsocial.repository.EmployerRepository;
import com.example.springsocial.repository.JobRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;

@Service
public class JobService {
	
	@Autowired
	JobRepository jobRepository;
	
	@Autowired
	EmployerRepository employerRepository;
	
	@Autowired
	UserRepository userRepository;

	
	public List<Job> getAllJobs(){
		return jobRepository.findAll();
	}
	
	

	public List<Job> getJobsByUserId(Long userId){
		
		if(!userRepository.existsById(userId)) {
			throw new ResourceNotFoundException("User", "userId", userId);
		}
		
		List<Job> jobs = new ArrayList<>();

		jobs = jobRepository.findByUserId(userId);
		
		return jobs;	
	}
	
	
	public Optional<Job> getJobById(Long jobId){
		if(!jobRepository.existsById(jobId)) {
			throw new ResourceNotFoundException("Job", "id", jobId);
		}
		return jobRepository.findById(jobId);
	}
	
	public Job createJob(Long userId, Long employerId, CreateJobRequest createJobRequest) {
		List<Job> jobs = new ArrayList<>();
		Employer employer1 = new Employer();
		User user1 = new User();
		
		Optional<User> userById = userRepository.findById(userId);
		if(!userById.isPresent()) {
			throw new ResourceNotFoundException("User", "id", userId);
		}
		
		User user = userById.get();
		
		Optional<Employer> byId = employerRepository.findById(employerId);
		if(!byId.isPresent()) {
			throw new ResourceNotFoundException("Employer", "id", employerId);
		}
		
		
		Employer employer = byId.get();
		
		Job job = new Job();
		job.setPosition(createJobRequest.getPosition());
		job.setDescription(createJobRequest.getDescription());
		job.setUrl(createJobRequest.getUrl());
		Instant now = Instant.now();
		job.setCreatedAt(now);
		
		//tie employer, user to Job
		job.setEmployer(employer);
		job.setUser(user);
		
		Job job1 = jobRepository.save(job);
		
		//tie job to Employer, user
		jobs.add(job1);
		employer1.setJobs(jobs);
		user1.setJobs(jobs);
		
		return job1;
	}

}
