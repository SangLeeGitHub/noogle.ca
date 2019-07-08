package com.example.springsocial.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.springsocial.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

	@Modifying
	@Query("Delete Contact c where c.conId = ?1")
	void deleteByConId(Long conId);
	
	Contact findByConId(Long conId);
	
	List<Contact> findAll();
	
}
