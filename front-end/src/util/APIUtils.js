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
        url: API_BASE_URL + "/api/" + userId + "/job",
        method: 'GET'
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

// export function createJob(jobCreationRequest){
//     console.log(jobCreationRequest);
//     return request({
//         url: API_BASE_URL + "/job/createjob",
//         method: 'POST',
//         body: JSON.stringify(jobCreationRequest)
//     });
// }    

export function searchEmployer(employerName){
    console.log(employerName);

    return request({
        url: API_BASE_URL + "/api/searchEmployer/"+ employerName,
        method: 'GET',
    });

    // return request({
    //     url: API_BASE_URL + "/job/createjob",
    //     method: 'POST',
    //     body: JSON.stringify(jobCreationRequest)
    // });
    
}

export function addEmployer(addEmployerRequest){
    console.log(addEmployerRequest);
    return request({
        url: API_BASE_URL + "/api/addEmployer",
        method: 'POST',
        body: JSON.stringify(addEmployerRequest)
    });
}    

export function addInterviewer(employerId, addInterviewerRequest){
    console.log(addInterviewerRequest);
    return request({
        url: API_BASE_URL + "/api/" + employerId + "/addInterviewer",
        method: 'POST',
        body: JSON.stringify(addInterviewerRequest)
    });
}    


export function addNewJob(userId, employerId, addNewJobRequest){
    console.log(addNewJobRequest);
    return request({
        url: API_BASE_URL + "/api/" + userId + "/" + employerId + "/addNewJob",
        method: 'POST',
        body: JSON.stringify(addNewJobRequest)
    });
}    
