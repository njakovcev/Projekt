export function PostData(type, userData) {
    let url = 'https://localhost:3000/';
    //ode triba neki url, ja nemam pojma koji :/

    return new Promise((resolve, reject) =>{
    
         
        fetch(url+type, {
            method: 'POST',
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          }).then(response => console.log(response.json))
          .catch((error) => {
            reject(error);
          });

  
      });
}

