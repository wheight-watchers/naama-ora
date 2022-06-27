function searchproducts() {
  debugger;
  const options = {
    method: "GET",
    headers: {},
  };
  let productname = document.getElementById("productName").value;
  let result=fetch(
    "https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&limit=4630",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const data = response.result.records;
      console.log(data);
      return data;
    })
    .then((data) => {
      data=data.filter((product) => {
        return product.shmmitzrach.includes(productname)
      });
      return data
    })
    .catch((err) => console.log(err));
    console.log(result);
    let ingredients=document.getElementById("ingredients")
    // let div=``
    result.forEach((i)=>{
        ingredients.innerHTML+=`<p>${i}</p>`
    })
    // ingredients.innerHTML+=div;
}
