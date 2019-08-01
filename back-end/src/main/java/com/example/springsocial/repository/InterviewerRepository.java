package com.example.springsocial.repository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springsocial.model.Interviewer;

@Repository
public interface InterviewerRepository extends JpaRepository<Interviewer, Long> {
	
	Optional<Interviewer> findById(Long interviewerId);
	
	boolean existsById(Long interviewerId);

}
