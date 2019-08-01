package com.example.springsocial.model;
import com.example.springsocial.model.audit.UserDateAudit;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;

import javax.persistence.*;
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

//    @Column(nullable = false)
//    private Long cId;
    
    @Column(nullable = true)
    private String description;

    @Column(nullable = true)
    private String url;
    
//    @Column(nullable = false)
//    private Long uId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="employerId", nullable= false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Employer employer;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="userId", nullable = false)
    private User user;
    
	public Employer getEmployer() {
		return employer;
	}

	@JsonIgnore
	public void setEmployer(Employer employer) {
		this.employer = employer;
	}

	public Long getJobId() {
		return jobId;
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

//	public Long getcId() {
//		return cId;
//	}
//
//	public void setcId(Long cId) {
//		this.cId = cId;
//	}

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
    
//	public Long getuId() {
//		return uId;
//	}
//
//	public void setuId(Long uId) {
//		this.uId = uId;
//	}

	public User getUser() {
		return user;
	}

	@JsonIgnore
	public void setUser(User user) {
		this.user = user;
	}
	
	
    
}
