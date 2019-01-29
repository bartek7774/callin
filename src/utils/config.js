// console.log('process.env.NODE_ENV: ',process.env.NODE_ENV);
let _rest_api = '',
    _exp_link = '',
    _regex_url=null;

if (process.env.NODE_ENV !== 'production') {
    // console.log('DEVELOPMENT');
    _rest_api = 'https://jsonplaceholder.typicode.com/posts';
    _exp_link = 'http://oferty.autoflix.pl/155-3fcb7322-1afe-4417-ba59-743bd9760d7b';
    _regex_url="https?:\\/\\/[\\w\\.\\d]+\/([\\d\\w]+)-([\\d\\w-]+)";
} else {
    // console.log('PRODUCTION');
    _rest_api = 'https://api.ctdp.pl/autoflix_events';
    _exp_link = window.location.href;
    _regex_url="https?:\\/\\/[\\w\\.\\d]+\/([\\d\\w]+)-([\\d\\w-]+)";
}

const REST_API = _rest_api;
const EXP_LINK = _exp_link;
const REGEX_URL= _regex_url;

export {
    REST_API,
    EXP_LINK,
    REGEX_URL
};