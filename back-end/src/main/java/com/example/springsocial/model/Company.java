package com.example.springsocial.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "company", uniqueConstraints = {
        @UniqueConstraint(columnNames = "cId")
})
public class Company implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cId;

    @Column(nullable = false)
    private String cName;

    @Column(nullable = true)
    private String unitNo;
    
    @Column(nullable = false)
    private String street;
    
    @Column(nullable = false)
    private String city;
    
    @Column(nullable = false)
    private String province;
    
    @Column(nullable = false)
    private String postalCode;

	@OneToMany(
			mappedBy = "company",
			cascade = CascadeType.ALL
//			fetch = FetchType.EAGER,
//			orphanRemoval = true
			)
//	@JoinColumn(name="cId")
//	@Size(min = 2, max = 6)
//	@Fetch(FetchMode.SELECT)
//	@BatchSize(size=30)
	private List<Contact> contacts;
    

    public Company(){
    
    }
    
//    public Company(Long cId, String cName, String unitNo, String street, String city, String province,
//			String postalCode, Contact contacts) {
//		super();
//		this.cId = cId;
//		this.cName = cName;
//		this.unitNo = unitNo;
//		this.street = street;
//		this.city = city;
//		this.province = province;
//		this.postalCode = postalCode;
////		this.contacts = contacts;
//		this.contacts = Stream.of(contacts).collect(Collectors.toList());
////		this.contacts.forEach(x -> x.setCompany(this));
//	}

	public List<Contact> getcontacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }
    
    public void addContacts(Contact newcontact) {
    	contacts.add(newcontact);
    	newcontact.setCompany(this);
    }

    public void removeContacts(Contact contactToRemove) {
    	contacts.remove(contactToRemove);
    	contactToRemove.setCompany(null);
    }
    


	public Long getcId() {
		return cId;
	}

	public void setcId(Long cId) {
		this.cId = cId;
	}

	public String getcName() {
		return cName;
	}

	public void setcName(String cName) {
		this.cName = cName;
	}

	public String getUnitNo() {
		return unitNo;
	}

	public void setUnitNo(String unitNo) {
		this.unitNo = unitNo;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
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

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Company)) return false;
        Company company = (Company) o;
        return Objects.equals(cName, company.cName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cName);
    }

    
}