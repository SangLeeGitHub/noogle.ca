package com.example.springsocial.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="Employer")
public class Employer implements Serializable {

	@Column(name="ID", nullable=false, length=10)
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="Enter the Employer's Name")
//	@Column(nullable=false)
	private String name;
	
    @Column(nullable = true)
	private String city;
	
    @Column(nullable = true)
	private String province;
	
    @Column(nullable = true)
	private String country;
		
	
	@OneToMany(mappedBy = "employer", fetch = FetchType.LAZY)
	private Set<Interviewer> interviewers = new HashSet<>(); 
	
	public Employer() {
		
	}

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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Set<Interviewer> getInterviewers() {
		return interviewers;
	}

	public void setInterviewers(Set<Interviewer> interviewers) {
		this.interviewers = interviewers;
	}
	
	
}
