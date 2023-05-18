const newcontainer = document.querySelector('.form');
const Btn = document.querySelector('button');

Btn.addEventListener('click', add);

function add() {
  
  const newD = document.createElement('div');
  newD.className="div1";
  newD.innerHTML = `<label>Medicine type</label>
    <select name="type">
      <option value="cap">Capsule</option>
      <option value="tab">Tablet</option>
      <option value="syr">Syrup</option>
      <option value="inj">Injection</option>
    </select>

    <label>Medicine name</label>
    <input type="text" name="name">

    <label>Dose duration</label>
    <select name="duration">
      <option value="1">1 day</option>
      <option value="3">3 days</option>
      <option value="5">5 days</option>
      <option value="10">10 days</option>
      <option value="15">15 days</option>
      <option value="20">20 days</option>
    </select>

    <label>Dose time</label>
    <select name="time">
      <option value="A">ASAP</option>
      <option value="1">Once a day</option>
      <option value="2">Twice a day</option>
      <option value="3">Three times a day</option>
    </select>

    <label>Remark*</label>
    <input type="text" name="remark">
     
    <button>X</button>
      
    `;
    const newlyCreatedBtn=    newD.querySelector('button');
    console.log(newlyCreatedBtn);
     newlyCreatedBtn.addEventListener('click',removeEntrieList)
   
  newcontainer.appendChild(newD);
}

function removeEntrieList(event)
{
 event.target.parentElement.remove();
}
</s