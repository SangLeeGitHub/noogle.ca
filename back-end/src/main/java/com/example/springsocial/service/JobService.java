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
import com.example.springsocial.payload.CreateJobRequest;
import com.example.springsocial.repository.EmployerRepository;
import com.example.springsocial.repository.JobRepository;

@Service
public class JobService {
	
	@Autowired
	JobRepository jobRepository;
	
	@Autowired
	EmployerRepository employerRepository;

	
	public List<Job> getAllJobs(){
		return jobRepository.findAll();
	}
	
	public Optional<Job> getJobById(Long jobId){
		if(!jobRepository.existsById(jobId)) {
			throw new ResourceNotFoundException("Job", "id", jobId);
		}
		return jobRepository.findById(jobId);
	}
	
	public Job createJob(Long employerId, CreateJobRequest createJobRequest) {
		List<Job> jobs = new ArrayList<>();
		Employer employer1 = new Employer();
		
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
		
		//tie employer to Job
		job.setEmployer(employer);
		
		Job job1 = jobRepository.save(job);
		
		//tie job to Employer
		jobs.add(job1);
		employer1.setJobs(jobs);
		
		return job1;
	}

}
