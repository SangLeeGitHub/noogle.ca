package com.example.springsocial.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "contact", uniqueConstraints = {
        @UniqueConstraint(columnNames = "conId")
})
public class Contact implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long conId;

    @Column(nullable = false)
    private String name;

    @Email
    @Column(nullable = false)
    private String email;
    
    @Column(nullable = true)
    private String phone;
    
    @Column(nullable = true)
    private String dept;
    
    @Column(nullable = true)
    private String etc;
    
//    @Column(nullable = false)
//    private Long cId;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="company_c_Id", nullable=false)
    private Company company;
    
//	public Contact(String name, @Email String email, String phone, String dept, String etc, Company company) {
//		super();
//		this.name = name;
//		this.email = email;
//		this.phone = phone;
//		this.dept = dept;
//		this.etc = etc;
//		this.company = company;
//	}

    @JsonIgnore
	public Company getCompany() {
		return company;
	}

    @JsonIgnore
	public void setCompany(Company company) {
		this.company = company;
	}


	public Long getConId() {
		return conId;
	}

	public void setConId(Long conId) {
		this.conId = conId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getEtc() {
		return etc;
	}

	public void setEtc(String etc) {
		this.etc = etc;
	}

//	public Long getcId() {
//		return cId;
//	}
//
//	public void setcId(Long cId) {
//		this.cId = cId;
//	}
	
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Contact contact = (Contact) o;
        return Objects.equals(conId, contact.conId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(conId);
    }
}