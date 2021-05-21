import { useLocation } from 'react-router-dom';

function ViewOrderItem() {
    const location = useLocation();

    const orderItem = [{ ...location.state }];

    const totalValue = () => {
        let value = 0;
        orderItem[0].orderItems.map((item => {
            value += item.novelPrice + item.episodePrice;
        }));
        return value;
    };

    return (
        <div>
            <div style={{ width: 'auto', minHeight: '100vh', padding: '50px' }}>
                <div style={{ margin: 'auto', width: '70%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ marginBottom: '50px' }}>
                            <h2 style={{ borderBottom: '1px solid black' }}>Order #{orderItem[0].id}</h2>
                            <h6>{orderItem[0].createdAt.split('T')[0]}</h6>
                            <h6>{orderItem[0].createdAt.split('T')[1].split('.')[0]}</h6>
                        </h1>
                        <div style={{ width: '400px', minHeight: '200px', marginBottom: '30px' }}>
                            <h3 style={{ display: 'inline' }}>USER: </h3> <p style={{ display: 'inline' }}> {orderItem[0].username}</p><br />
                            <h3 style={{ display: 'inline' }}>EMAIL:</h3> <p style={{ display: 'inline' }}>{orderItem[0].email}</p><br />
                            <h3 style={{ display: 'inline' }}>DELIVER TO:</h3> <p style={{ display: 'inline' }}>{orderItem[0].address}</p>
                        </div>
                    </div>
                    <nav style={{ display: 'grid', gridTemplateColumns: '0.3fr 1fr 1fr 1fr', textAlign: 'center', borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '10px' }}>
                        <h3 style={{ textAlign: 'left' }}>Cover</h3>
                        <h3 style={{ textAlign: 'left' }}>Novel</h3>
                        <h3 style={{ textAlign: 'left' }}>Episode</h3>
                        <h3>Price</h3>
                    </nav>
                    <div>
                        {orderItem[0].orderItems.map((item, i) => {
                            return (
                                <div key={i} style={{ display: 'grid', gridTemplateColumns: '0.3fr 1fr 1fr 1fr', textAlign: 'center', paddingBottom: '10px' }}>
                                    <img alt="cover" src={item.cover} style={{ width: '30px' }} />
                                    <p style={{ textAlign: 'left' }}>{item.novelTitle}</p>
                                    <p style={{ textAlign: 'left' }}>{item.episodeTitle}</p>
                                    <p>{(item.episodePrice == 0) ? item.novelPrice : item.episodePrice}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.3fr 1fr 1fr', margin: '15px 5px' }}>
                        <h3>Total Value</h3>
                        <h3></h3>
                        <h3></h3>
                        <h3 style={{ textAlign: 'center' }}>{totalValue()}</h3>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ViewOrderItem;