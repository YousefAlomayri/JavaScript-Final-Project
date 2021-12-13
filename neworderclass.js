class Order {
    constructor(pizz, pizzquantity, Chicke, Chickequantity, idOrder) {
      this.pizz = pizz;
      this.pizzquantity = pizzquantity;
      this.Chicke = Chicke;
      this.Chickequantity = Chickequantity;
      this.idOrder=idOrder;
   }
   info() {
      
    if (this.pizz==undefined || this.Chicke== undefined){

       if ((this.Chicke== undefined)&&(this.pizz == undefined) ){
        let order =`<span class="textRedColor">Pizza: </span> You didn't pick a pizza.. <span class="textRedColor">Quantity: </span> ${this.pizzquantity}. <br> 
        <span class="textRedColor">Chicken: </span> You didn't pick a chicken. <span class="textRedColor">Quantity: </span> ${this.Chickequantity}.`;
        console.log(this.idOrder);
        return(order);
      }
      else if (this.pizz == undefined){
        let order =`<span class="textRedColor">Pizza: </span> You didn't pick a pizza. <span class="textRedColor">Quantity: </span> ${this.pizzquantity}. <br> 
       <span class="textRedColor">Chicken: </span> ${this.Chicke}. <span class="textRedColor">Quantity: </span> ${this.Chickequantity}.`;
       console.log(this.idOrder);
       return(order);

      }
      else if (this.Chicke== undefined){
        let order =`<span class="textRedColor">Pizza: </span> ${this.pizz}. <span class="textRedColor">Quantity: </span> ${this.pizzquantity}. <br> 
        <span class="textRedColor">Chicken: </span> You didn't pick a chicken. <span class="textRedColor">Quantity: </span> ${this.Chickequantity}.`;
        console.log(this.idOrder);
        return(order);
      }

    
    }
    
    else {
      let order =`<span class="textRedColor">Pizza: </span> ${this.pizz}. <span class="textRedColor">Quantity: </span> ${this.pizzquantity}. <br> 
       <span class="textRedColor">Chicken: </span> ${this.Chicke}. <span class="textRedColor">Quantity: </span> ${this.Chickequantity}.`;
       console.log(this.idOrder);
       return(order);
      }
    }
  };