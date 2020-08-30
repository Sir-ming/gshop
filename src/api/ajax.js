import axios from 'axios'

export default function ajax(url="",data={},type='GET'){

    return new Promise(function(resolve,reject){
        let promise
        //get请求
        if(type==='GET'){
            let str=''
            //get的拼串
            Object.keys(data).forEach(key=>{
                str+=key+'='+data[key]+'&'
            })
            if(str!=''){
                str=str.substring(0,str.length-1)
            }
            promise=axios.get(url+"?"+str)
        }
        //post的请求
        if(type==='POST'){
            promise=axios.post(url,data)
        }
        promise.then(response=>{
            resolve(response.data)
        }).catch(error=>{
            reject(error)
        })
    })


}