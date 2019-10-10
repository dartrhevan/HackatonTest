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

function requestToken() {
    let request = new XMLHttpRequest();
    request.open('GET', codeRequestURL, false);
    //request.setRequestHeader('Authorization', getToken());
    request.send();
}

function getToken() {
    return debugToken;
}

function requestData() {
    let request = new XMLHttpRequest();
    //request.setRequestHeader('Content-Type')
    request.open('GET', filesURL, false);
    request.setRequestHeader('Authorization', getToken());
    request.send();
    return JSON.parse(request.responseText);
}

export {requestData};