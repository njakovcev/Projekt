export function PostData(type, userData) {
    let url = '';
    //ode triba neki url, ja nemam pojma koji :/

    return new Promise((resolve, reject) =>{
    
         
        fetch(url+type, {
            method: 'POST',
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}