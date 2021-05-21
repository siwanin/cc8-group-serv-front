import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import localStorageService from '../services/localStorageService';

function ViewOrder() {
    const history = useHistory();

    const [order, setOrder] = useState([]);
    const token = localStorageService.getToken();

    const fetchUserOrder = async () => {
        const res = await axios.get('http://localhost:8000/order/', { headers: { 'Authorization': `Bearer ${token}` } });
        setOrder(res.data.orders);
    };

    useEffect(() => {
        fetchUserOrder();
    }, []);

    console.log(order);

    return (
        <div style={{ width: 'auto', minHeight: '100vh', padding: '50px' }}>
            <div style={{ margin: 'auto', width: '70%' }}>
                <h1 style={{ marginBottom: '50px' }}>Order History</h1>
                <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', textAlign: 'center', borderBottom: '1px solid #000', paddingBottom: '10px' }}>
                    <h3>Order number</h3>
                    <h3>Date</h3>
                    <h3>Time</h3>
                    <h3></h3>
                </nav>
                <div>
                    {order.map((item, i) => {
                        return (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', margin: '5px' }}>
                                <h4 style={{ textAlign: 'center' }}>{item.id}</h4>
                                <p style={{ textAlign: 'center' }}>{item.createdAt.split('T')[0]}</p>
                                <p style={{ textAlign: 'center' }}>{item.createdAt.split('T')[1].split('.')[0]}</p>
                                <button style={{ width: '100px', position: 'relative', left: '35%' }} onClick={() => history.push({ pathname: '/vieworderitem', state: order[i] })}>view</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ViewOrder;