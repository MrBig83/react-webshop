import React from "react";
import { Layout } from "antd";
import Main from "./assets/components/Main/Main";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import NavCarousel from "./assets/components/NavCarousel/NavCarousel";
import MyProductsProvider from "./context/productscontext";

// // Ninjas in pyjamas
// // import IProduct from "./assets/interfaces/Interfaces";
// // import { ICartItem } from "./assets/interfaces/ICartItem";
// // import ShopingCart from "./assets/components/ShopingCart/ShopingCart";


// // interface IAppState {
// //   cartItems: ICartItem[];
// //   toggledReload: boolean;
// //   isLoggedIn: boolean;
// // }



// // class App extends React.Component<{}, IAppState> {
// //   constructor(props: any){
// //     super(props);

// //     this.state = {
// //       cartItems: this.retrieveList('cartItems'),
// //       toggledReload: false,
// //       isLoggedIn: false
// //     }

// //     this.handleAddToCart = this.handleAddToCart.bind(this);
// //     this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
// //     this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
// //     this.handleClearCart = this.handleClearCart.bind(this);
// //     this.handleReload = this.handleReload.bind(this);
// //     this.setLoggedIn = this.setLoggedIn.bind(this);
// //   }
// //   private productService = new ProductService();



// //   Methods to handle cart

// //   handleAddToCart(addedProduct: IProduct) {
// //     console.log(addedProduct);
// //     let isInCart: boolean = false;
// //     this.state.cartItems.forEach((item)=>{
// //       if(item.product._id === addedProduct._id){
// //         isInCart = true;
// //       }
// //     });
// //     if(!isInCart){
// //       const cartItem = {product: addedProduct, quantity: 1, totalPrice: addedProduct.price}; 
// //       const updatedCartItems = [...this.state.cartItems, cartItem];
// //       this.storeList(updatedCartItems, 'cartItems');
// //       this.setState({
// //         cartItems: updatedCartItems
// //       });
// //     }
// //   }

// //   handleRemoveFromCart(removedCartItem: ICartItem) {
// //     const updatedCartItems = this.state.cartItems.filter(item => {
// //       return (item.product._id !== removedCartItem.product._id);
// //     });
// //     this.storeList(updatedCartItems, 'cartItems');
// //     this.setState({cartItems: updatedCartItems});
// //   }

// //   handleUpdateQuantity(updatedCartItem: ICartItem) {
// //     const updatedCartItems = [...this.state.cartItems];
// //     find item and replace with the updated version
// //     updatedCartItems.forEach((item, idx)=>{
// //       if(item.product._id === updatedCartItem.product._id){
// //         updatedCartItems.splice(idx, 1, updatedCartItem);
// //       }
// //     });
// //     this.storeList(updatedCartItems, 'cartItems');
// //     this.setState({cartItems: updatedCartItems});
// //   }

// //   handleClearCart() {
// //     const clearedCart: ICartItem[] = [];
// //     this.storeList(clearedCart, 'cartItems');
// //     this.setState({cartItems: clearedCart});
// //   }

// //   //Session storage
// //   storeList(arr: ICartItem[], storageName: string): void{
// //     //browser has webStorage
// //     if(typeof(Storage) !== "undefined"){           
// //         sessionStorage.setItem(storageName, JSON.stringify(arr));           
// //     }
// //   }

// //   retrieveList(storageName: string): ICartItem[]{
// //     const arr: ICartItem[] = [];
// //     //browser has webStorage
// //     if(typeof(Storage) !== "undefined"){

// //       //defined in sessionStorage
// //       if(sessionStorage.getItem(storageName)){
// //         let tempList: any[];
// //         let temp: string | null = sessionStorage.getItem(storageName); 
// //         tempList = (temp)? JSON.parse(temp) : [];
        
// //         if(tempList.length > 0){
// //             arr.length = 0;
// //             tempList.forEach((item: any) => {
// //                 arr.push(item);
// //             });
// //         }
// //       }    
// //     }
// //     return arr;    
// //   }


// // Ninjas in pyjamas






const App: React.FC = () => {
 
    return (
      <MyProductsProvider>
        <Layout className="layout">
          <Header />
          <NavCarousel />
          <Main />
          <Footer />
        </Layout>
      </MyProductsProvider>
    );
  }
// }


export default App;