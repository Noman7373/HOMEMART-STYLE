// import paymentLogo from "../assets/cardir.png";
// import paymentLogo2 from "../assets/pay.png";
// import ScrollTop from "./ScrollTop";

// const CheckoutPayment = () => {
//   return (
//     <>
//     <ScrollTop />
//       <div className="flex flex-col gap-2">
//         <div>
//           <h2 className="font-bold text-[18px]">
//             We accepts the following payment Method
//           </h2>
//           <div className="flex justify-start  items-center gap-6 h-[90px] mt-6">
//             <img
//               src={paymentLogo}
//               alt="paymentLogo"
//               className="h-full hover:bg-slate-200 border-[2px] border-slate-500 p-2 rounded"
//             />
//             <img
//               src={paymentLogo2}
//               alt="PaypalLogo"
//               className="h-full w-fit border border-slate-300 hover:bg-slate-200 rounded"
//             />
//           </div>
//           <p className="mt-4 text-slate-400">
//             Fields marked with an asterisk (*) are required.
//           </p>
//         </div>
//         <form className="flex flex-col mt-3 gap-3">
//           <div className="flex flex-col w-full p-2 border border-slate-300 rounded ">
//             <label htmlFor="Name">Name On The Card *</label>
//             <input
//               id="Name"
//               name="Name"
//               type="text"
//               placeholder="Noman Ahmed"
//               required
//               className="outline-0 py-1"
//             />
//           </div>
//           <div className="flex flex-col w-full p-2 border border-slate-300 rounded">
//             <label htmlFor="CardNumber">Card Number *</label>
//             <input
//               id="CardNumber"
//               name="CardNumber"
//               type="number"
//               placeholder="1234 56789 9012 3456"
//               required
//               className="outline-0 py-1"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
//               <label htmlFor="Expiry">Expiry Day *</label>
//               <input
//                 type="text"
//                 id="Expiry"
//                 name="Expiry"
//                 placeholder="06/25"
//                 required
//                 className="outline-0"
//               />
//             </div>
//             <div className="flex flex-col border border-slate-300 p-2 w-full rounded">
//               <label htmlFor="CVV">CVC/CVV *</label>
//               <input
//                 type="text"
//                 id="CVV"
//                 name="CVV"
//                 placeholder="CVC/CVV"
//                 className="outline-0"
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// // 
// export default CheckoutPayment;