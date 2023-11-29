fetch(url, options) {
  let request = new Request(url,options)
    let response = http.request(request).then(response=>{
      resolve(response)
    }).catch(error=>{
      reject(error)
    })
  
  return promise
}