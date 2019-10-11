class Disk {
    constructor() {
        const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        const debugToken = 'AgAAAAA5MmVHAAXomrFvvi_BIEiPshP8mskytpA';
        this.applicationId = '3614a67fb38645fe90cc5fe066f84746';
        this.token = debugToken;
        this.path = 'disk:/';
        this.params = this.parseQueryString();
        if(this.params.hasOwnProperty('path'))
            this.path = this.params['path'];
        /*
        if(params.hasOwnProperty('code')) {
            this.token = this.requestToken(params['code']);
            //return this.requestData();
        }
        else
            this.requestCode();*/
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
        const tokenRequestURL = `https://oauth.yandex.ru/token?grant_type=authorization_code&code=${code}`;
        request.open('POST', tokenRequestURL, false);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send();
        let response = JSON.parse(request.responseText);

        if(!response.hasOwnProperty('access_token')) return null;

        return  response.access_token;
    }

    requestCode() {
        const codeRequestURL =`https://oauth.yandex.ru/authorize?response_type=code&client_id=${applicationId}`;
        const request = new XMLHttpRequest();
        request.open('GET', codeRequestURL, false);
        request.send();
    }

    /*initialize() {//функция, запускаемая при загрузке документа
        const params = parseQueryString();
        if(params.hasOwnProperty('code')) {
            token = requestToken(params['code']);
            return requestData();
        }
        else
            requestCode();
    }*/

    requestData(path = this.path) {
        const filesURL = `https://cloud-api.yandex.net/v1/disk/resources?path=${path}`;
        const request = new XMLHttpRequest();
        //request.setRequestHeader('Content-Type')
        request.open('GET', filesURL, false);
        request.setRequestHeader('Authorization', this.token);
        request.send();
        return JSON.parse(request.responseText);
    }
}


//console.log(requestData());