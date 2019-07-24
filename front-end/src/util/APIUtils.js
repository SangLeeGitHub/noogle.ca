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

//백엔드에 구현 필요(response를 무엇으로 줄 것인가 고민)
//user 마다 회사를 달리 등록할 것인가, 그 안의 interviewer를 통합으로 다 보게 해줄 것인가, 자기 등록한 것만 보여주게 할 것인가...(후자가 낫다)
//그렇게 하기 위해서는, Model에 다시 User를 등록해줘야 하지 않나?
export function searchEmployer(employerName){
    // console.log(employerName);
    return request({
        url: API_BASE_URL + "/api/employer/" + employerName,
        method: 'GET',
    })
}