package com.example.springsocial.repository;


import com.example.springsocial.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
	

    List<Job> findAll();
    
    Optional<Job> findById(Long id);
    
    // Boolean existsByEmail(String email);
    
//    @Query("SELECT * FROM Job j where j.user.id = :userId")
    List<Job> findByUserId(Long id);

}

