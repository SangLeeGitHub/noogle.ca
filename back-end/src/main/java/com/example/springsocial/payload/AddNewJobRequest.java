package com.example.springsocial.payload;

import javax.validation.constraints.NotBlank;

public class AddNewJobRequest {
	@NotBlank
	private String position;
	
	private String description;
	private String url;
	
	@NotBlank
	private Long userId;

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

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	
}
