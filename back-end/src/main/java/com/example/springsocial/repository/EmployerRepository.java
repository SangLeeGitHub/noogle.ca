package com.example.springsocial.repository;

import java.util.List;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.springsocial.model.Employer;


@Repository
public interface EmployerRepository extends JpaRepository<Employer, Long> {
	
//	Optional<Employer> findById(Long jobId);
	
	@Query("select e from Employer e where e.name like %?1%")
	List<Employer> findByEmployerName(String employerName);
	
//	Page<Employer> findByCreatedBy(Long userId, Pageable pageable);
//
//    long countByCreatedBy(Long userId);
//
//    List<Employer> findByIdIn(List<Long> employerIds);
//
//    List<Employer> findByIdIn(List<Long> employerIds, Sort sort);

}
