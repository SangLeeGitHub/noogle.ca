package com.example.springsocial.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Interviewer")
public class Interviewer implements Serializable {

	@Column(name="ID", nullable = false, length =10)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable =false)
	private String name;
	
	@Column(nullable = false)
	private String responsibility;
	
	@Email
	@Column(nullable =false)
	private String email;
	
	@Column(nullable = true)
	private String phone;
	
	@Column(nullable = true)
	private String dept;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="employerId", nullable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Employer employer;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getResponsibility() {
		return responsibility;
	}

	public void setResponsibility(String responsibility) {
		this.responsibility = responsibility;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public Employer getEmployer() {
		return employer;
	}

	@JsonIgnore
	public void setEmployer(Employer employer) {
		this.employer = employer;
	}
	
	
}
