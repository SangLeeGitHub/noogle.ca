package com.example.springsocial.model;
import com.example.springsocial.model.audit.UserDateAudit;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "job", uniqueConstraints = {
        @UniqueConstraint(columnNames = "jobId")
})
public class Job extends UserDateAudit implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobId;

    @Column(nullable = false)
    private String position;

    
    @Column(nullable = true)
    private String description;

    @Column(nullable = true)
    private String url;
    
//    @NotNull
//	private Instant registrationDateTime;
//	

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="employerId", nullable= false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Employer employer;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="users_id", nullable = false)
    private User user;

	public Long getJobId() {
		return jobId;
	}


	public User getUser() {
		return user;
	}

	@JsonIgnore
	public void setUser(User user) {
		this.user = user;
	}


	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}


	public String getPosition() {
		return position;
	}


	public void setPosition(String position) {
		this.position = position;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}


//	public Instant getRegistrationDateTime() {
//		return registrationDateTime;
//	}
//
//
//	public void setRegistrationDateTime(Instant registrationDateTime) {
//		this.registrationDateTime = registrationDateTime;
//	}


	public Employer getEmployer() {
		return employer;
	}


	@JsonIgnore
	public void setEmployer(Employer employer) {
		this.employer = employer;
	}
    
	

	//getter Method to retrieve the Employer's ID
	public Long getEmployer_id() {
		return employer.getId();
	}
	
	//getter Method to get the employer's name
	public String getEmployer_name() {
		return employer.getName();
	}


}

	