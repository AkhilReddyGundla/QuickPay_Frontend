import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Balance() {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://backendservice-7jx6.onrender.com/api/v1/accounts/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                const userBalance = response.data.balance;
                const formattedBalance = userBalance.toLocaleString('en-IN');
                const userMoney = Number(formattedBalance);
                setBalance(userMoney);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mt-5 ml-4 font-semibold text-xl md:text-1.5xl lg:text-2xl text-black flex gap-2 items-center">
            <div className="font-semibold text-xl md:text-1.5xl lg:text-2xl pl-2 pr-2 pt-1 pb-1 bg-blue-600 rounded-lg text-white">Your Balance </div>
            <div>₹ {balance !== null ? balance : 'Loading...'} </div>
        </div>
    );
}
