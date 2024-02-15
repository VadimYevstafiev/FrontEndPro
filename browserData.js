function find(string, symbol) {
    let flag = 0;
    let result = [];
    while (flag !== -1) {
        flag = string.indexOf(symbol, flag + 1);
        if (flag !== -1) result.push(flag);
    }
    return result;
}

function divideItems(item) {
    let data = item.split('/');
    return {
        name: data[0],
        version: data[1]
    };
}

export function getBrowserData(userAgent) {
    let lefts = find(userAgent, '(');
    let rigths = find(userAgent, ')');

    let result = {
        mozilla: null,
        systemInformation: null,
        platform: null,
        platformDetails: null,
        extensions: null,
    }

    let browser;

    result.mozilla = userAgent.slice(0, lefts[0]).trim();
    result.systemInformation = userAgent.slice(lefts[0] + 1, rigths[0]).trim();


    if (lefts.length === 2) {
        result.platform = userAgent.slice(rigths[0] + 1, lefts[1]).trim();
        result.platformDetails = userAgent.slice(lefts[1] + 1, rigths[1]).trim();
        result.extensions = userAgent.slice(rigths[1] + 1).trim().split(' ').map(divideItems);     
    } else {
        let service = userAgent.slice(rigths[0] + 1).trim().split(' ');
        result.platform = service.shift();
        result.extensions = service.map(divideItems); 
    }

    if (result.extensions.length === 1) {
        browser = result.extensions[0];
    } else if (result.extensions.length === 2) {
        if (result.extensions[0].name === 'Chrome') {
            browser = result.extensions[0];
        } else {
            browser = result.extensions[1];           
        }
    } else {
        browser = result.extensions.pop(); 
        switch (browser.name) {
            case 'OPR':
                browser.name = 'Opera'
                break;
            case 'Edg':
                browser.name = 'Microsoft Edge'
                break;
        }
    }
    return browser;
}