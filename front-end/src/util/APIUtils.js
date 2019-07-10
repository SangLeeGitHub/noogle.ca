import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
        // 'charset': 'UTF-8'
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getJobLists(userId){
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/api/"+ userId + "/job",
        method: 'GET',
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function updateInfo(updateRequest) {
    return request({
        url: API_BASE_URL + "/auth/updateinfo",
        method: 'PUT',
        body: JSON.stringify(updateRequest)
    });
}

export function createJob(userId, employerId,jobCreationRequest){
    console.log(jobCreationRequest);
    return request({
        url: API_BASE_URL + "/api/" + userId + "/" + employerId + "/createJob",
        method: 'POST',
        body: JSON.stringify(jobCreationRequest)
    });
}

export function createEmployer(employerCreationRequest){
    console.log(employerCreationRequest);
    return request({
        url: API_BASE_URL + "/api/createEmployer",
        method: 'POST',
        body: JSON.stringify(employerCreationRequest)
    });
}


export function createInterviewer(employerId ,interviewerCreationRequest){
    console.log(interviewerCreationRequest);
    // const employerId = interviewerCreationRequest.employerId;
    return request({
        url: API_BASE_URL + "/api/" + employerId + "/createInterviewer",
        method: 'POST',
        body: JSON.stringify(interviewerCreationRequest)
    });
}