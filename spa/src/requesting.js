export default class Disk {
    constructor() {
        const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        this.applicationId = '3614a67fb38645fe90cc5fe066f84746';
        this.applicationPassword = 'd12eb8df2d5946d3a74f54f91dcbc0aa';
        this.path = 'disk:/';
        this.params = this.parseQueryString();
        this.token = undefined;
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
        if(!response.hasOwnProperty('access_token')) return undefined;

        return  response.access_token;
    }

    resetSearchString() {
        let res = '?';
        for(const pa of this.params.keys())
            res += `${pa}=${this.params[pa]}&`;
        window.location.search = res;
    }

    requestData(path = this.path) {
        if(this.token === null || this.token === '' || this.token === undefined) return { items: [] };
        const filesURL = `https://cloud-api.yandex.net/v1/disk/resources?path=${path}`;
        const request = new XMLHttpRequest();
        request.open('GET', filesURL, false);
        request.setRequestHeader('Authorization', this.token);
        request.send();
        const resp = JSON.parse(request.responseText);
        if(!resp.hasOwnProperty('_embedded')) resp._embedded = { items: [] };
        return resp._embedded;
    }
}
