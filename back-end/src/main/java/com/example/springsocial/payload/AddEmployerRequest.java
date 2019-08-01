package com.example.springsocial.payload;

import java.util.Set;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

import com.example.springsocial.model.Interviewer;

public class AddEmployerRequest {
	@NotBlank
	private String name;
	
	@Column(nullable = true)
	private String city;
	
	@Column(nullable = true)
	private String province;
	
	@Column(nullable = true)
	private String country;
	
	@Column(nullable = true)
	private Set<Interviewer> interviewers;

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
