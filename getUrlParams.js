//获取url参数
function queryParams(){
    let search = location.search;
    let obj = {};
    
    if(params.indexOf('?')>-1){
      let params = search.substr(1);
      let paramsArr = params.split('&');

      for(let i=0; i<paramsArr.length;i++){
          let tempArr = paramsArr[i].split('=');  
          obj[tempArr[0]] = tempArr[i]   
      }

      return obj;
    }
}

queryParams();