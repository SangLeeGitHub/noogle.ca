package com.example.springsocial.service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Employer;
import com.example.springsocial.model.Job;
import com.example.springsocial.model.User;
import com.example.springsocial.payload.AddNewJobRequest;
//import com.example.springsocial.payload.JobListRequest;
import com.example.springsocial.repository.EmployerRepository;
import com.example.springsocial.repository.JobRepository;
import com.example.springsocial.repository.UserRepository;
@Service
public class JobService {
	@Autowired
	JobRepository jobRepository;
	
	@Autowired
	EmployerRepository employerRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public List<Job> getJobsByUserId(Long userId){
	
		if(!userRepository.existsById(userId)) {
			throw new ResourceNotFoundException("User", "userId", userId);
		}
		
		List<Job> jobs = new ArrayList<>();
		jobs = jobRepository.findByUserId(userId);
		return jobs;
	}

	public Job addNewJob(Long userId, Long employerId, AddNewJobRequest addNewJobRequest) {
		List<Job> jobs = new ArrayList<>();
		Employer employer1 = new Employer();
		User user1 = new User();
		
		Optional<User> userById = userRepository.findById(userId);
		if(!userById.isPresent()) {
			throw new ResourceNotFoundException("User", "id", userId);
		}
		
		User user = userById.get();
		Optional<Employer> employerById = employerRepository.findById(employerId);
		if(!employerById.isPresent()) {
			throw new ResourceNotFoundException("Employer", "id", employerId);
		}
		
		Employer employer = employerById.get();
		
		Job job = new Job();
		job.setPosition(addNewJobRequest.getPosition());
		job.setDescription(addNewJobRequest.getDescription());
		job.setUrl(addNewJobRequest.getUrl());
		Instant now = Instant.now();
		job.setCreatedAt(now);
		
		//tie employer, user to Job
		job.setEmployer(employer);
		job.setUser(user);
		
		Job job1 = jobRepository.save(job);
		
		//tie job to employer, user
		jobs.add(job1);
		employer1.setJobs(jobs);
		user1.setJobs(jobs);
		
		return job1;
		
		
	}
	
}
