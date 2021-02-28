import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { useGlobalState, useGlobalStateUpdate } from '../../context/globalContext'
function AdminDashboard() {
    let [orderData, setOrderData] = useState([])
    const globalStateUpdate = useGlobalStateUpdate()
    let history = useHistory()
    function logout() {
        axios({
            method: 'post',
            url: 'http://localhost:5000/logout',
            withCredentials: true
        }).then((response) => {
            console.log(response)
            globalStateUpdate(prev => ({
                ...prev,
                loginStatus: false,
                role: null
            }))
            history.push("/login")

        }, (error) => {
            console.log(error);
        });
    }
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/getOrders',
            withCredentials: true
        }).then((response) => {
            console.log(response.data.data)
            setOrderData(response.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function updateStatus(id){
        axios({
            method: 'post',
            url: 'http://localhost:5000/updateStatus',
            data: {
                id: id,
                status: "Order confirmed"
            },
            withCredentials: true
        }).then((response) => {
            console.log(response.data.data)
            setOrderData(response.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    console.log("Order data", orderData)
    return (
        <div>
            <div className="container">
                <h1 className='text-center mt-3 mb-3'>Customers Orders</h1>
                <div className='row'>
                    {
                       orderData && orderData.map((v, i) => {
                            return (
                                <div className='col-md-5 mr-2 ml-2 mt-4 py-3 px-3' style={{ boxShadow: "0 0 10px grey" }}>
                                    <div>
                                        <span>Name:</span>
                                        <span className='float-right'>{v.name}</span>
                                    </div>
                                    <div>
                                        <span>Address:</span>
                                        <span className='float-right'>{v.address}</span>
                                    </div>
                                    <div>
                                        <span>Phone:</span>
                                        <span className='float-right'>{v.phone}</span>
                                    </div><hr/>
                                    {
                                        v.orders.map((v, i) => {
                                            return (
                                                <div>
                                                    <div className='row '>
                                                        <div className='col-md-4'>{v.name}</div>
                                                        <div className='col-md-4 text-center'>{v.price} PKR</div>
                                                        <div className='col-md-4 text-right'>{v.qty} Kg</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <hr />
                                    <div>
                                        <span>Total Amount</span>
                                        <span className='float-right'>{v.total} PKR</span>
                                    </div>
                                    <div>
                                        <span className='float-right mt-2'>
                                            <button onClick={()=>{
                                                updateStatus(v._id)
                                            }} >Confirm Order</button>
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard