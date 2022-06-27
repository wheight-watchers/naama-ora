

function searchProducts() {
  debugger;
  document.getElementById("ingredients").innerHTML=""
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
    }).then((data)=>
    {
      if(data.length==0){
        alert("There is no such product")
      }
      else{
console.log(data)
data.forEach((d)=>{document.getElementById("ingredients").innerHTML+=
`<h1>${d.shmmitzrach}</h1>`+
`<h3>total fat:${d.total_fat}</h3>`+
`<h3>total sugars :${d.total_sugars}</h3>`+
`<h3> carbohydrates :${d.carbohydrates}</h3>`+
`<h3> food energy :${d.food_energy}</h3>`+
`<h3>poly unsaturated fat :${d.poly_unsaturated_fat}</h3>`
;debugger})
 } })
    .catch((err) => console.log(err));
}
