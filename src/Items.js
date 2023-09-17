import React from "react";
import './items.css';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [{
                imgurl: "https://cdn.zeptonow.com/production///tr:w-200,ar-612-491,pr-true,f-webp,q-80/inventory/product/2d4977e0-b052-46f9-a334-9e1ad72e8806-2470.jpeg",
                heading: "Onion",
                Price: 34,
                Quantity: 1,
                OrderedQ: 0
            },
            {
                imgurl: "https://cdn.zeptonow.com/production///tr:w-200,ar-500-398,pr-true,f-webp,q-80/inventory/product/b463f035-8533-4eed-b9dc-9815f8f25e79-imported-avocado-500x500.jpg",
                heading: "Avacado",
                Price: 50,
                Quantity: 1,
                OrderedQ: 0
            },
            {
                imgurl: "https://cdn.zeptonow.com/production///tr:w-200,ar-1000-851,pr-true,f-webp,q-80/inventory/product/f869debc-6453-448f-8aa4-1d62f4d24cb5-tomato_hybrid.jpg",
                heading: "Tomato",
                Price: 120,
                Quantity: 1,
                OrderedQ: 0
            },
            {
                imgurl: "https://cdn.zeptonow.com/production///tr:w-200,ar-4733-3447,pr-true,f-webp,q-80/inventory/product/ecc31f68-e5e0-4970-8295-f5509cb9ac09-coriander_leaves.jpg",
                heading: "Coriander leaves",
                Price: 66,
                Quantity: 500,
                OrderedQ: 0
            },
            {
                imgurl: "https://cdn.zeptonow.com/production///tr:w-200,ar-597-403,pr-true,f-webp,q-80/inventory/product/7057ad6d-f9a8-49c9-997f-d6d0353a9b3d-potato-1-kg-product-images-o590000090-p590000090-0-202207291750.jpg",
                heading: "Potato",
                Price: 37,
                Quantity: 1,
                OrderedQ: 0
            },
            {
                imgurl: "https://cdn.zeptonow.com/production///tr:w-200,ar-684-513,pr-true,f-webp,q-80/inventory/product/963724eb-2471-41fa-be98-f5cbf1d5d7ab-c7c6fae7-2102-4203-b43d-55c902e76299.jpeg",
                heading: "Carrot",
                Price: 78,
                Quantity: 1,
                OrderedQ: 0
            },
            ]
        };
    }
    increment(cardObj) {
        console.log(cardObj);
        this.setState((prevState) => {
            const updatedArr = prevState.arr.map((val) => {
                if (cardObj.heading === val.heading) {
                    return { ...val, OrderedQ: val.OrderedQ + 1 };
                }
                return val;
            });

            

            return { arr: updatedArr };
        });
    }

    decrement(cardObj) { //recieved the val as card obj
        this.setState((prevState) => {      //used prevstate to access the previous array
            const updatedArr = prevState.arr.map((val) => {   //takes all the array of obj in account nd storin ipdatedarr
                if (cardObj.heading === val.heading) {  //condition like if the clicked heading is in the headin 
                    return { ...val, OrderedQ: val.OrderedQ - 1 };  // it changes its orderedq
                }
                return val;  //gives back other array as the same 
            });


            return { arr: updatedArr };     //returns the updated arr
        });
    }
   addTocart(){
        console.log("added");
    }
    render() {
        let dataString = this.state.arr.map((val) => {
            return (
                <div className="container1">
                    <div className="card">
                        <img src={val.imgurl} alt="logo" className="image" />
                        <h2 className="heading"> {val.heading} </h2>
                        <div className="prsection">
                            <p className="leftpr pr">Rs {val.Price} /- </p>
                            <p className="rightpr pr">Quantity {val.Quantity} Kg </p>
                        </div>

                        <div className="buttons">
                            <span>Rs.{val.Price * val.OrderedQ}</span>
                            <button onClick={() => { this.increment(val) }} className="btn"> + </button>
                            <span>{val.Quantity * val.OrderedQ}kg</span>
                            <button onClick={() => { this.decrement(val) }}className="btn"> - </button>
                        </div>
                        <button className="atcbtn" onClick={this.addTocart}> Add to Cart </button>

                    </div>
                </div>
            );
        })

        return (
            <div>
                <div className="gbox">

                    {dataString}

                </div>

            </div>
        );
    }
}
export default Items;