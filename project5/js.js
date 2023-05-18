let product_about = [];
function saved_product(){

  let temp = [];
  const P_Name = document.querySelector("#Product_Name").value;
  const c_price = document.querySelector("#Product_Cost").value;
  const s_price = +document.querySelector("#Selling_Price").value;
  const dis_type = document.querySelector("#dis_option").value;

  const dis_value = +document.querySelector("#dis_value").value;
  const after_discount_amt =+dis_count(s_price , dis_type, dis_value);


  const tax  = +document.querySelector("#tax_option").value;

  const total_amt = tax1(after_discount_amt , tax);

  temp.push(P_Name ,c_price , s_price , dis_type, dis_value, tax , total_amt );

  product_about.push(temp);
  console.log(product_about);

  render();

  // remove();  

}




function render(){

  // Get the table body element in which you want to add row
  let table1 = document.getElementById("tableBody");
 
  // Create row element
  let row = document.createElement("tr");

  // Create cells
  let c1 = document.createElement("td")
  let c2 = document.createElement("td")
  let c3 = document.createElement("td")
  let c4 = document.createElement("td")
  let c5 = document.createElement("td")
  let c6 = document.createElement("td")
  let c7 = document.createElement("td")

  for(i=0;i<product_about.length;i++){
    for(j=0;j<product_about.length;j++){

      // Insert data to cells
      c1.innerText = product_about[i][0];
      c2.innerText = product_about[i][1];
      c3.innerText = product_about[i][2];
      c4.innerText = product_about[i][3];
      c5.innerText = product_about[i][4];
      c6.innerText = product_about[i][5];
      c7.innerHTML = product_about[i][6];


      // Append cells to row
      row.appendChild(c1);
      row.appendChild(c2);
      row.appendChild(c3);
      row.appendChild(c4);
      row.appendChild(c5);
      row.appendChild(c6);
      row.appendChild(c7);

    
      // Append row to table body
      table1.appendChild(row)

    }
  }
}


function dis_count(sp, dis_type = 0,di_value){

  if((dis_type == undefined) || (dis_type ==  null) || (dis_type == "")){
    return sp;
  }
  else if(dis_type == 'Percent'){
    return  (sp - (sp * di_value)/100);
  }
  else if(dis_type == 'Flat'){
    return  (sp - di_value);
  }
}

function tax1(after_discount_amt , tax){
  return (after_discount_amt + (after_discount_amt * tax)/100);
}

function remove(){
  document.querySelector('#Product_Name').value = ' ';
  document.querySelector('#Product_Cost').value= '';
  document.querySelector('#Selling_Price').value = '';
  document.querySelector("#dis_option").value = '';
  document.querySelector("#dis_value").value = '';
  // document.querySelector("#tax_option").value = '';
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){

  const tab = document.querySelector(".table");
  tab.style = "display:block";

  
  saved_product();
  remove()
  

});

