const dataStorage={
    account : { 
        name: "",
        user: "",
        pass: "",
    },
    pizza:["Chicken Taco", "Philly Cheese Steak",
    "Cali Chicken Bacon Ranch","Pacific Veggie"
    ,"Wisconsin 6 Cheese"],
    chicken:[ "Specialty Chicken _ Crispy Bacon & Tomato",
     "Specialty Chicken _ Spicy Jalapeno - Pineapple", 
     "Hot Buffalo Wings", "Honey BBQ Wings", "Boneless Chicken"]
};

const pizzaMenuList= document.createElement("ol");
const chickenMenuList= document.createElement("ol");
dataStorage.pizza.forEach(pizza=> {
    let pizzaType = `${pizza}`;
    let listPizza = document.createElement("li");
     listPizza.innerHTML=pizzaType;
     pizzaMenuList.append(listPizza);
});

dataStorage.chicken.forEach(chicken => {
    let chickenType = `${chicken}`;
    let listchicken = document.createElement("li");
    listchicken.innerHTML=chickenType;
    chickenMenuList.append(listchicken);
});
let pizzaShowMenu = pizzaMenuList;
let pizzamenu = document.querySelector(".pizzamenu");  
pizzamenu.append(pizzaShowMenu);
  
let chickenShowMenu = chickenMenuList;
let  chickenmenu = document.querySelector(".chickenmenu"); 
chickenmenu.append(chickenShowMenu);



 const newaccount = function () {
    let newacount= document.querySelector(".newAccount");
    newacount.style="display:inline-block;";     
};

const create= function () {
    let newusername= document.querySelector(".newusername");
    let newuserpass= document.querySelector(".newpasscode");
    let newfirstname=document.querySelector(".newfirstname");
    let userfirstname= newfirstname.value;
    let userenter= newusername.value; 
    let passenter= newuserpass.value;
    console.log(" Your Password is: " + passenter);
    dataStorage.account.name=userfirstname; 
    dataStorage.account.user=userenter;
    dataStorage.account.pass=passenter;
    let welcomeMessage = document.querySelector(".welcomeMessage");
    welcomeMessage.innerHTML= `Your Account is ready  <span class="textRedColor"> ${dataStorage.account.name}.</span> Your Username is <span class="textRedColor"> ${dataStorage.account.user} </span>. Please log In to order`
    login();
};

let NewOrderArray = new Array();  
let index=0
const login= function () {
    let loginArea= document.querySelector(".loginBox");
    loginArea.style="display:block";
    let usernameenter= document.querySelector(".username");
    let userpassenter= document.querySelector(".password");
    let username= usernameenter.value; 
    let passcode= userpassenter.value;
    index++;
    if (index==2){
    if ((username==dataStorage.account.user) && (passcode==dataStorage.account.pass )){
        reveal();
        showLoginSuccess(true); 
        index--;   
    }
    else{
        showLoginSuccess(false);
        index--;
    }
  }
};

const showLoginSuccess = function (YesOrno) {
  if(YesOrno)
  {
   
    let loginMessage = document.querySelector(".loginMessage")
    loginMessage.innerHTML= `Welcome  <span class="textRedColor">${dataStorage.account.name}</span>`
}
else{
  let loginMessage = document.querySelector(".loginMessage")
    loginMessage.innerHTML= `Username or Password is wrong`
}
};


const reveal = function() {
    
  let orderEntry = document.querySelector(".orderEntry");
  orderEntry.style = "display:inline-block";
}; 

  

function buildOrder() {
    
    let PizzaTy = 
       document.querySelector(".Pizza").value -1;
    let Pizzaquantity = 
       document.querySelector(".Pizzaquantity").value;
    let ChickenTy = 
       document.querySelector(".Chicken").value -1;
       let Chickenquantity = 
       document.querySelector(".Chickenquantity").value;
     let idOrder = Date.now();
    let neworder = 
          new Order(dataStorage.pizza[PizzaTy], 
            Pizzaquantity, 
            dataStorage.chicken[ChickenTy], 
            Chickenquantity, idOrder);
    NewOrderArray.push(neworder);
    updateorderList(neworder);
  };
  
  
const updateorderList = (neworder)=> {
    let orderList = document.querySelector(".orderList");
    let listOrder = document.createElement("li");
    listOrder.innerHTML = neworder.info();
    listOrder.className = "id"+neworder.idOrder;
    console.log(listOrder.className)
    orderList.append(listOrder);
    setModificationsStatus();
  };

  const setModificationsStatus = function() {
    let modsArea= document.querySelector(".orderedit");
    if (NewOrderArray.length > 0)
       modsArea.style = "display:inline-block";
    else
       modsArea.style = "display:none";
  };

  const getOrderData = ()=> {
    revealOrderInfo(true);
    let orderNumberBox = document.querySelector(".orderNumber");
    let orderNumber = orderNumberBox.value;
    orderNumberBox.disabled = true;
    orderNumber = parseInt(orderNumber);
    let order = NewOrderArray[orderNumber-1];
    let orderData = document.querySelector(".orderData");
    let info = order.info();
    orderData.innerHTML=info;
    console.log(order.idOrder)
};

const revealOrderInfo = (on)=> {
    let orderInfoArea = document.querySelector(".orderInfo");
    if (on)
      orderInfoArea.style = "display: block;";
    else
      orderInfoArea.style = "display: none;";
    };

const removeOrder = function() {
    let orderNumberBox = document.querySelector(".orderNumber");
    let orderNumber = orderNumberBox.value;
    orderNumber = parseInt(orderNumber);
    let order = NewOrderArray[orderNumber-1];
    NewOrderArray.splice(orderNumber-1, 1);
    let orderSelected = document.querySelector(".id"+order.idOrder); 
    console.log(orderSelected)
    let orderList = document.querySelector(".orderList");
    orderList.removeChild(orderSelected);
    orderNumberBox.disabled = false;
    revealOrderInfo(false);
    setModificationsStatus();
  };

const saveOrderData= function () {
  let orderNumberBox = document.querySelector(".orderNumber");
  let orderNumber = orderNumberBox.value;
  orderNumber = parseInt(orderNumber);
  let order = NewOrderArray[orderNumber-1];
  console.log(order)
  
  let newPizzaBox = document.querySelector(".newPizza");
  let newpizza = newPizzaBox.value - 1;
  order.pizz = dataStorage.pizza[newpizza];
 
  
  let newPQBox = document.querySelector(".newPQ");
  let newPQ = newPQBox.value;
  order.pizzquantity = newPQ;

  
  let newchickenBox = document.querySelector(".newchicken");
  let newchicken = newchickenBox.value - 1;
  order.Chicke= dataStorage.chicken[newchicken];
 
  
  let newCQBox = document.querySelector(".newCQ");
  let newCQ = newCQBox.value;
  order.Chickequantity=newCQ;

  let orderSelected = document.querySelector(".id"+order.idOrder);
  let showNeworder = order.info();
  orderSelected.innerHTML = showNeworder
 
  orderNumberBox.disabled = false;
  revealOrderInfo(false);
  setModificationsStatus();
};