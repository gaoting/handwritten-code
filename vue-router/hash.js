window.onload = function () {
  var hash = window.location.hash

  window.addEventListener('hashchange',function () {
    // 获取新的hash部分  
    var newHash = window.location.hash;  
          
    // 根据不同的hash值进行不同的操作  
    if (newHash === '#page1') {  
        // 页面1的操作  
    } else if (newHash === '#page2') {  
        // 页面2的操作  
    } else {  
        // 其他操作  
    }  

  })
}