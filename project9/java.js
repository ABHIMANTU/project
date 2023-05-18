const p_name = document.querySelector("#PRODUCT_NAME");
const p_price = document.querySelector("#PRODUCT_PRICE");
const p_discription = document.querySelector("#DISCRIPTION");
const dis_type = document.querySelector("#DISCOUNT_TYPE");
const discount = document.querySelector("#DISCOUNT");
const tax = document.querySelector("#TAX");

function dis_count(sp, dis_type = 0, di_value) {
    if(dis_type == "None"){
      return sp;
    }
    else if (dis_type == 'PERCENT') {
      return (sp - (sp * di_value) / 100);
    }
    else if (dis_type == 'FLAT') {
      return (sp - di_value);
    }
}

function tax1(after_discount_amt, tax) {
    return (after_discount_amt + (after_discount_amt * tax) / 100);
}

function abc(){
    const discounted = dis_count(+p_price.value, dis_type.value, +discount.value);

    if(dis_type.value == "None"){
        document.querySelector("#name").innerHTML = p_name.value;
        const ab =  document.querySelector("#price").innerHTML = p_price.value;
        ab.style = "color:red;"
        document.querySelector("#disc").innerHTML = p_discription.value;
        document.querySelector("#dis_amount").innerHTML = "0";
        document.querySelector("#discount_amt").innerHTML = "0";
        document.querySelector("#tax_amt").innerHTML = tax1(+discounted , +tax.value)

    }
    else if(dis_type.value == "FLAT" || dis_type.value == "PERCENT"){
      document.querySelector("#name").innerHTML = p_name.value;
      document.querySelector("#price").innerHTML = p_price.value;
      document.querySelector("#disc").innerHTML = p_discription.value;
      document.querySelector("#dis_type").innerHTML = dis_type.value;
      document.querySelector("#dis_amount").innerHTML = discount.value;
      document.querySelector("#discount_amt").innerHTML = discounted;
      document.querySelector("#tax_amt").innerHTML = tax1(+discounted , +tax.value);
      
    }
}

p_name.addEventListener("keyup", abc);
p_price.addEventListener("keyup", abc);
p_discription.addEventListener("keyup", abc);
dis_type.addEventListener("change", abc);
discount.addEventListener("keyup", abc);
tax.addEventListener("change", abc);


// function line_thru(){
//     if(dis_type.value == "FLAT" || dis_type.value == "PERCENT"){
//         const line = document.querySelector("#price").innerHTML = p_price.value;
//         line.style = "text-decoration:line-through;";
//     }
// }


function line(){
  if(dis_type.value == "FLAT" || dis_type.value == "PERCENT"){
    p_price.value.style = "color:red;"
  }
}

function delet(){
  if(dis_type == "PERCENT"){
    discount.remove();
  }
}


document.querySelector("#btn").addEventListener("click",function(){
  document.querySelector("#PRODUCT_NAME").value = "";
  document.querySelector("#PRODUCT_PRICE").value = "";
  document.querySelector("#DISCRIPTION").value = "";
  document.querySelector("#DISCOUNT_TYPE").value = "";
  document.querySelector("#DISCOUNT").value = "";
  document.querySelector("#TAX").value= "";
});