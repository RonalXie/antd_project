import request from "@/uitls/request";


export function hello() {
    return request({
        url: '/article/hello',
        method: 'get',
    })
}