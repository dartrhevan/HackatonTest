export default class Disk {
    constructor() {
        const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        const debugToken = 'AgAAAAA5MmVHAAXomrFvvi_BIEiPshP8mskytpA';
        this.applicationId = '3614a67fb38645fe90cc5fe066f84746';
        this.applicationPassword = 'd12eb8df2d5946d3a74f54f91dcbc0aa';
        this.token = debugToken;
        this.path = 'disk:/';
        this.params = this.parseQueryString();
        if(this.params.hasOwnProperty('path'))
            this.path = this.params['path'];

        if(this.params.hasOwnProperty('code')) {
            this.token = this.requestToken(this.params['code']);
        }
    }

    parseQueryString(strQuery = window.location.search) {
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

    requestToken(code) {
        const request = new XMLHttpRequest();
        const body = `grant_type=${encodeURIComponent('authorization_code')}&code=${encodeURIComponent(code)}&client_id=${encodeURIComponent(this.applicationId)}&client_secret=${encodeURIComponent(this.applicationPassword)}`;
        const tokenRequestURL = 'https://oauth.yandex.ru/token';
        request.open('POST', tokenRequestURL, false);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(body);
        console.log(request.responseText);
        let response = JSON.parse(request.responseText);
        if(!response.hasOwnProperty('access_token')) return null;

        return  response.access_token;
    }

    resetSearchString() {
        let res = '?';
        for(const pa of this.params.keys())
            res += `${pa}=${this.params[pa]}&`;
        window.location.search = res;
    }

    requestData(path = this.path) {
        const filesURL = `https://cloud-api.yandex.net/v1/disk/resources?path=${path}`;
        const request = new XMLHttpRequest();
        //request.setRequestHeader('Content-Type')
        request.open('GET', filesURL, false);
        request.setRequestHeader('Authorization', this.token);
        request.send();
        //console.log(request.responseText);
        const resp = JSON.parse(request.responseText);
        //console.log(resp);
        return resp._embedded;
    }
}
