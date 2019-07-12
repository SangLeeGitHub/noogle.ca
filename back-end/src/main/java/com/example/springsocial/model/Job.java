package com.example.springsocial.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "job", uniqueConstraints = {
        @UniqueConstraint(columnNames = "jobId")
})
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobId;

    @Column(nullable = false)
    private String position;
    
    @Column(nullable = false)
    private String companyName;

//    @Column(nullable = false)
//    private Long cId;
    
    @Column(nullable = true)
    private String jobDescription;

    @Column(nullable = true)
    private String url;
    
//    @Column(nullable = false)
//    private Long uId;

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
		return jobDescription;
	}

	public void setDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
    
//	public Long getuId() {
//		return uId;
//	}
//
//	public void setuId(Long uId) {
//		this.uId = uId;
//	}
//    
}
