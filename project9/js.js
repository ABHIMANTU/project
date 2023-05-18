function product() {
  const price = +document.querySelector("#PRODUCT_PRICE").value;
  const dis_type = +document.querySelector("#DISCOUNT_TYPE").value;
  const dis_value = +document.querySelector("#DISCOUNT").value;

  const after_discount_amt = +dis_count(price, dis_type, dis_value);
  console.log(after_discount_amt);

  const tax  = +document.querySelector("#TAX").value;

  const total_amt = tax1(after_discount_amt , tax);
}


function dis_count(sp, dis_type = "None", di_value) {

  if ((dis_type == undefined) || (dis_type == null) || (dis_type == "")) {
    return sp;
  }
  else if (dis_type == 'Percent') {
    return (sp - (sp * di_value) / 100);
  }
  else if (dis_type == 'Flat') {
    return (sp - di_value);
  }
}


function tax1(after_discount_amt, tax) {
  return (after_discount_amt + (after_discount_amt * tax) / 100);
}



let name1 = document.querySelector("#PRODUCT_NAME");
name1.addEventListener("keyup",function(){
  const abc =  this.value;
  document.querySelector("#span").innerHTML = abc;
})

let price = document.querySelector("#PRODUCT_PRICE");
price.addEventListener("keyup",function(){
  const abc =  this.value;
  document.querySelector("#price").innerHTML = abc;
})

let discription = document.querySelector("#DISCRIPTION");
discription.addEventListener("keyup",function(){
  const abc =  this.value;
  document.querySelector("#disc").innerHTML = abc;
})


let dis_type = document.querySelector("#DISCOUNT_TYPE");
dis_type.addEventListener("click",function(){
  const abc =  dis_type.value;
  document.querySelector("#dis_type").innerHTML = abc;
})


let pro_dis = document.querySelector("#DISCOUNT");
pro_dis.addEventListener("keyup", function(){
  const abc = pro_dis.value;
  document.querySelector("#dis_amount").innerHTML = abc;
  product();
});






// let dis_value = document.querySelector("#DISCOUNT_TYPE");
// dis_value.addEventListener("keyup",function(){
//   const dis_type =  this.value;
//   const price = +document.querySelector("#PRODUCT_PRICE").value;
//   console.log(price);
//   const dis_value = +document.querySelector("#DISCOUNT").value;
  
//   const after_discount_amt = +dis_count(price, dis_type, dis_value);
//   console.log(after_discount_amt);
//   document.querySelector("#dis_amount").innerHTML = after_discount_amt;
// })