/*let app = new Vue({
    el: '#app',
    data: {
        m: window.location.search,
        message: codeRequestURL,
        resp: requestData()
    }
});*/
/*function RequestConfig() {

}*/
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const debugToken = 'AgAAAAA5MmVHAAXomrFvvi_BIEiPshP8mskytpA';
const applicationId = '3614a67fb38645fe90cc5fe066f84746';
const codeRequestURL =`https://oauth.yandex.ru/authorize?response_type=code&client_id=${applicationId}`;
let path = 'disk:/';
let filesURL = `https://cloud-api.yandex.net/v1/disk/resources?path=${path}`;

function parseQueryString(strQuery = window.location.search) {
    let strSearch   = strQuery.substr(1),
        strPattern  = /([^=]+)=([^&]+)&?/ig,
        arrMatch    = strPattern.exec(strSearch),
        objRes      = {};
    while (arrMatch != null) {
        objRes[arrMatch[1]] = arrMatch[2];
        arrMatch = strPattern.exec(strSearch);
    }
    return objRes;
}

function requestToken(code) {
    let request = new XMLHttpRequest();
    const tokenRequsetURL = `https://oauth.yandex.ru/token?grant_type=authorization_code&code=${code}`;
    request.open('POST', tokenRequsetURL, false);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send();
    let response = JSON.parse(request.responseText);

    if(!response.hasOwnProperty('access_token')) return null;

    return  response.access_token;
}

function requestCode() {
    let request = new XMLHttpRequest();
    request.open('GET', codeRequestURL, false);
    request.send();
}

function initialize() {//функция, запускаемая при загрузке документа
    //let token = debugToken;
    const params = parseQueryString();
    if(params.hasOwnProperty('code')) {
        const token = requestToken(params['code']);
        return requestData(token);
    }
    else
        requestCode();
}

function requestData(token = debugToken) {
    let request = new XMLHttpRequest();
    //request.setRequestHeader('Content-Type')
    request.open('GET', filesURL, false);
    request.setRequestHeader('Authorization', token);
    request.send();
    return JSON.parse(request.responseText);
}

//console.log(requestData());