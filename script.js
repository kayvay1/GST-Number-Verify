let gstinput = document.getElementById("gstinput")
let gstresult = document.getElementById("gstresult")
let businessname = document.getElementById("businessname")
let tradename = document.getElementById("tradename")
let address = document.getElementById("address")
let type = document.getElementById("type")
let registration = document.getElementById("registration")
let constitution = document.getElementById("constitution")
let status1 = document.getElementById("status1")
let adoffice = document.getElementById("adoffice")
let otheroffice = document.getElementById("otheroffice")
let gstdata = document.querySelector(".gstdata")
let content = document.querySelector(".content")



let searchbtn = document.getElementById("searchbtn")

let inputvalue = gstinput.value;

function validInput(){
if(inputvalue.length >= 2){
  // gstinput.type = "text"
  gstinput.pattern = '.*'
}else{
  gstinput.pattern = '\\d*'
}


}

validInput()
async function fetchData() {
    // const url = 'https://gst-return-status.p.rapidapi.com/free/gstin/27AAJCM9929L1ZM';
    const url = `https://gst-return-status.p.rapidapi.com/free/gstin/${gstinput.value}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'ab7c50179dmsh2f52b7754163372p121ca8jsn0bbdf3356bf9',
        'X-RapidAPI-Host': 'gst-return-status.p.rapidapi.com'       
      }
    };
  
    try {
      const response = await fetch(url, options);
      
     
      const result = await response.json();
  
      console.log(result);
      gstdata.style.display = "inline-block"
      gstresult.innerHTML = gstinput.value
      businessname.innerHTML = result.data.lgnm
      tradename.innerHTML = result.data.tradeName
      address.innerHTML = result.data.adr
      type.innerHTML = result.data.dty
      registration.innerHTML = result.data.rgdt
      constitution.innerHTML = result.data.ctb
      status1.innerHTML = result.data.sts
      adoffice.innerHTML = result.data.ctj
      otheroffice.innerHTML = result.data.stj
      gstresult.style.color = "blue"
      content.style.display = "flex"
      // console.log(JSON.parse(result).tradeName);
        // console.log(result.ctb);
    } catch (error) {
      console.error(error);
      gstresult.innerHTML = "Please Enter a Valid GSTIN"
      gstresult.style.color = "red"
      content.style.display = "none"
    }
  }
  
  


// let gstinput = document.getElementById("gstinput")
gstdata.style.display = "none"


searchbtn.addEventListener("click", function(){
    // gstresult.innerHTML = gstinput.value;
    // validInput()
    fetchData();
   
    // dataRec()
})


function dataRec(){
    businessname.innerHTML = result.lgnm
    console.log(result.lgnm)    
}




//   const url = 'https://gst-return-status.p.rapidapi.com/free/gstin/27AAJCM9929L1ZM';
//   const options = {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'X-RapidAPI-Key': 'ab7c50179dmsh2f52b7754163372p121ca8jsn0bbdf3356bf9',
//           'X-RapidAPI-Host': 'gst-return-status.p.rapidapi.com'
//       }
//   };

//   try {
//       const response = await fetch(url, options);
//       const result = await response.json();

//       console.log(result);
//   } catch (error) {
//       console.error(error);
//   }