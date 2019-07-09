package com.example.springsocial.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * Created by 
 */

public class CreateJobRequest {
    @NotBlank
    private String position;
    
       
    private String description;
    
    private String url;
    


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

}
