import { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import localStorageService from '../services/localStorageService';
import axios from 'axios';

function Order() {
    const location = useLocation();
    const history = useHistory();

    const [basket, setBasket] = useState([...location.state]);
    const [address, setAddress] = useState('');

    const totalValue = () => {
        let value = 0;
        basket.map((item => {
            value += item.price;
        }));
        return value;
    };

    const deleteBasketItem = (i) => {
        setBasket(basket.filter((item, index) => index !== i));
    };

    const token = localStorageService.getToken();

    const createOrder = async () => {
        try {
            const res = await axios.post('http://localhost:8000/order', { address }, { headers: { 'Authorization': `Bearer ${token}` } });
            const { id } = res.data.order;
            for (let i of basket) {
                let novelContentId = 0;
                let amount = 1;
                let discount = 0;
                if (!i.episodeTitle) {
                    const { data } = await axios.get(`http://localhost:8000/novel/${i.id}/episode`);
                    novelContentId = data.episodes[0].id;
                    await axios.post(`http://localhost:8000/order/item/${id}`, { amount, discount, novelContentId }, { headers: { 'Authorization': `Bearer ${token}` } });
                }
                if (i.episodeTitle) {
                    novelContentId = +i.id;
                    await axios.post(`http://localhost:8000/order/item/${id}`, { amount, discount, novelContentId }, { headers: { 'Authorization': `Bearer ${token}` } });
                }
            }
            history.push('/vieworder');
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div style={{ width: 'auto', minHeight: '100vh', padding: '50px' }}>
            <div style={{ margin: 'auto', width: '70%' }}>
                <h1 style={{ marginBottom: '50px' }}>Order Placement</h1>
                <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', textAlign: 'center', borderBottom: '1px solid #000', paddingBottom: '10px' }}>
                    <h3>Novel</h3>
                    <h3>Price</h3>
                    <h3>Action</h3>
                </nav>
                <div>
                    <h3>{basket.map((item, i) => {
                        return (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', margin: '5px' }}>
                                <h4>{item.title} : {item.episodeTitle}</h4>
                                <p style={{ textAlign: 'center' }}>{item.price}</p>
                                <button style={{ width: '100px', position: 'relative', left: '35%' }} onClick={() => deleteBasketItem(i)}>Delete</button>
                            </div>
                        );
                    })}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', margin: '15px 5px' }}>
                    <h2>Total Value</h2>
                    <h2 style={{ textAlign: 'center' }}>{totalValue()}</h2>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <label htmlFor="address"><h3 style={{ display: 'inline', marginRight: '10px' }}>Delivery Address</h3></label>
                    <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={{ minWidth: '500px', height: '20px', margin: '10px 0', border: '0', borderBottom: '1px solid #ccc', outline: '0' }} />
                </div>
                <button style={{ width: '300px', height: '30px', position: 'relative', left: '35%' }} onClick={() => createOrder()}>Confirm Order</button>
            </div>
        </div>
    );
}

export default Order;