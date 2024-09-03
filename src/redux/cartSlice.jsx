import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  cart: [],
  productsArray: []
  // productsArray: [
  //   {
  //     id: 1,
  //     photo: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     price: 109.95,
  //   },
  //   {
  //     id: 2,
  //     photo:
  //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     title: "Mens Casual Premium Slim Fit T-Shirts",
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     price: 22.23,
  //   },
  //   {
  //     id: 3,
  //     photo: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     title: "Mens Cotton Jacket",
  //     description:
  //       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     price: 55.9,
  //   },
  //   {
  //     id: 4,
  //     photo: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     title: "Mens Casual Slim Fit",
  //     description:
  //       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     price: 15.98,

  //   },
  //   {
  //     id: 5,
  //     photo: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  //     title: "Solid Gold Petite Micropave ",
  //     description:
  //       "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  //     price: 168,
  //   },
  //   {
  //     id: 6,
  //     photo: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //     title: "White Gold Plated Princess",
  //     description:
  //       "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  //     price: 9.99,
  //   },
  //   {
  //     id: 7,
  //     photo: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  //     title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
  //     description:
  //       "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  //     price: 10.99,
  //   },
  //   {
  //     id: 8,
  //     photo: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  //     title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  //     description:
  //       "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  //     price: 64,
  //   },
  // ]
}
let cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state=initialState, action) => {
      state.cart.push(action.payload);
    },
    removefromCart: (state=initialState, action) => {
       state.cart= state.cart.filter((products) => products.id !== action.payload.id);
    },
    addDataToStore: (state=initialState, action)=>{
      console.log("data111:", action.payload.data);
      state.productsArray = [...action.payload.data];
    }
  },
});

export default cartSlice.reducer;
export let { addtoCart, removefromCart, addDataToStore } = cartSlice.actions;