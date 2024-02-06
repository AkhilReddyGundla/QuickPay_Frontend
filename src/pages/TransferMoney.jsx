import { Header } from "../components/Header"
import { Inputfields } from "../components/Inputfields"
import { useSearchParams } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export function TransferMoney(){
    const [searchParams] = useSearchParams();
    const [amount,setAmount] = useState(0);
    const userName = searchParams.get("name");
    const id =searchParams.get("id")
    const navigate = useNavigate()
    return (
        <>
            <div className="grid place-content-center h-screen bg-gray-50">
                <div className="p-5 rounded-lg bg-white shadow-lg">
                    <div className="pl-20 pr-20 pt-10">
                        <Header text="Send Money" />
                    </div>
                    <div className="mt-8 w-full font-semibold">
                        <div className="flex items-center flex-start">
                            <div className="text-2xl font-semibold bg-blue-100 rounded-full flex items-center ml-1 mr-4 pr-3 pl-3 pt-1 pb-1 ">{userName[0]}</div>
                            <div className="font-semibold text-xl flex items-center">{userName}</div>
                        </div>
                        <Inputfields text="Amount (in Rs)" type="number" placeholder="Enter Amount" onChange={(e)=>{setAmount(e.target.value)}}/>
                        <button onClick={async () => {
                            try {
                                const res = await axios.post("https://backendservice-7jx6.onrender.com/api/v1/accounts/transfer", {
                                    to: id,
                                    amount: amount
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem("token"),
                                        "Content-Type": "application/json",
                                    }
                                });

                                
                                alert("Transaction successful");
                                navigate("/dashboard")
                            } catch (error) {
                                alert("Check your Balance")
    
                            }
                        }} className="justify-center rounded-md text-md font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-500 text-white">
                            Initiate Transfer
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}