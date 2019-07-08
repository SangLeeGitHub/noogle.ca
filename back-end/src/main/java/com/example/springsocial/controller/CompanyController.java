package com.example.springsocial.controller;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springsocial.model.Contact;
import com.example.springsocial.repository.CompanyRepository;
import com.example.springsocial.repository.ContactRepository;

@RestController
@RequestMapping("/company")
public class CompanyController {
	
	@Autowired
	private ContactRepository contactRepository;
	
	private List<Contact> contactList;
	
	@PreAuthorize("hasRole('USER')")
	@GetMapping("")
	public List<Contact> getContactList(){
		System.out.println("----------------------- /company");
		return contactRepository.findAll();
	}
	
	@PreAuthorize("hasRole('USER')")
	@GetMapping("/contact/{conId}")
	public Contact getContactById(@PathVariable("conId") Long conId){
		
//		Optional<Contact> contactFound = contactRepository.findById(conId);
//		Contact contact = contactFound.get();
		System.out.println("----------------------- /company/contact/conId");
		return contactRepository.findByConId(conId);
	}

}
