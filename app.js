//  Class inherit Example 
class customer{

    constructor(sk) {
this.name = sk;
    }
    sell(){
        console.log(this.name)
    }
}

class subCutomer extends customer{
    data(){

        console.log("whats mobile");
    }
}

let product = new subCutomer("Mobile Iphone android");

console.log(product)
product.sell();
product.data();