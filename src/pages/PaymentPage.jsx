import React, { useContext, useState } from 'react';
import { dataProducts } from '../appData';
import { Link, useLocation, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import axios from 'axios';

const PaymentPage = () => {

    // const {id,total} = useParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const productId = params.get('productId');
    const Amount = params.get('price');

    const [phoneNumber,setPhone] = useState('');


    //make payment
    const makePayment = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.post(`https://laundryappstk.vercel.app/stkpush`,{phoneNumber,Amount});
            console.log(response.data);
            console.log("payment made successfully");
            
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <div className="flex-1">
            <div className="flex-1 w-full bg-primary">
                <div className="w-full">
                    <Nav />
                </div>
            </div>
            <div className="flex-1 w-full sm:py-16 py-6 sm:px-16 px-6">
                <div className="w-full">
                    <div className="flex w-full justify-center items-cente">
                        <h1 className="font-poppins font-normal text-[30px]">Checkout Page({Amount})</h1>

                    </div>
                    <div className="w-full justify-center items-center">
                    <input className="h-12 w-40 rounded-xl border border-slate-300 focus:border-slate-500" type="text" onChange={(e)=>setPhone(e.target.value)} />
                    </div>

                    <button onClick={makePayment} className="bg-green-500 h-12 w-40 rounded-xl">Make Payment</button>





                </div>
            </div>

        </div>
    );
}

export default PaymentPage;
