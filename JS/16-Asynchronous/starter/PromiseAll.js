// Promise All, when you don't want to wait for all of them one by one, and wanna run all together

const getJSON = async function(link) {
    const data = await fetch(link)
    return data.json()
  }
  
  const get3Countries = async function (c1, c2, c3) {
    try {
      // so it will wait for each other
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
  
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
  
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
      
  
      // so it will run together
      const data = await Promise.all([
        getJSON(`https://restcountries.com/v3.1/name/${c1}`),
        getJSON(`https://restcountries.com/v3.1/name/${c2}`),
        getJSON(`https://restcountries.com/v3.1/name/${c3}`)
      ])
  
      console.log(data)
  
    } catch (err) {
      console.error(err);
    }
  };
  
  get3Countries('USA', 'CANADA', 'UK')