import ky from 'ky'


// 709fa152
const client = ky.extend({
    prefixUrl:'',
    retry:3,
    timeout: 60000,
})

const api = client.extend({
    hooks:{
        beforeRequest:[
            (request) => {
                console.log(request.url, 'Request URL');
                // Add any headers or modifications before the request is sent
                request.headers.set('Content-Type', 'application/json');
            }
        ]
    }
})

export default api;