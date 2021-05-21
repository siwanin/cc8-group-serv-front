import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function OrderTest() {
    const history = useHistory();

    const [novels, setNovels] = useState([]);
    const [novel, setNovel] = useState([]);
    const [novelContent, setNovelContent] = useState([]);
    const [basket, setBasket] = useState([]);
    const [toggleBasket, setToggleBasket] = useState(false);
    const [toggleShow, setToggleShow] = useState(false);

    const fetchAllNovel = async () => {
        const res = await axios.get('http://localhost:8000/novel');
        setNovels(res.data.novels);
    };

    const fetchNovel = async (id) => {
        const res = await axios.get(`http://localhost:8000/novel/${id}/`);
        setNovel(res.data.novel);
    };

    const fetchNovelContent = async (id) => {
        const res = await axios.get(`http://localhost:8000/novel/${id}/episode`);
        setNovelContent(res.data.episodes);
    };

    const addBasketItem = (item) => {
        if (basket.includes(item)) return '';
        else setBasket(prev => [...prev, item]);
    };

    const deleteBasketItem = (i) => {
        setBasket(basket.filter((item, index) => index !== i));
    };

    useEffect(() => {
        fetchAllNovel();
    }, []);

    return (
        <div>
            <header>
                <nav style={{ backgroundColor: 'lightblue', width: '100%', textAlign: 'right' }}>
                    <a style={{ marginRight: '50px' }} href='#home'><img alt="basket" onClick={() => setToggleBasket(!toggleBasket)} width='30px' src='https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png' /></a>
                </nav>
                {toggleBasket && <div style={{ position: 'absolute', right: '50px', width: '400px', minHeight: '300px', border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.4fr', padding: '10px', borderBottom: '1px solid black', margin: '0 10px', textAlign: 'center' }}>
                        <h4>Novel</h4>
                        <h4>Price</h4>
                        <h4>Delete</h4>
                    </div>
                    {basket.map((item, i) => {
                        return (<div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.4fr', padding: '10px', textAlign: 'center' }}>
                            {}
                            <p style={{ textAlign: 'left' }}>{item.title}: {item.episodeTitle} </p>
                            <p>{item.price}</p>
                            <button style={{ height: '20px' }} onClick={() => deleteBasketItem(i)}> x </button>
                        </div>);
                    })}
                    <button style={{ width: '200px', margin: 'auto' }} onClick={() => history.push({ pathname: '/order', state: basket })}>Confirm Order</button>
                </div>}
            </header>
            <h1>Novel</h1>
            <div style={{ display: 'flex' }}>
                {novels.map((item, i) => {
                    return <div key={i} style={{ margin: '0 10px' }} onClick={() => { fetchNovel(item.id); fetchNovelContent(item.id); }}>
                        <div style={{
                            backgroundImage: `url(${item.cover})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '160px',
                            height: '225px'
                        }} onClick={() => setToggleShow(!toggleShow)}></div>
                        <div style={{ width: '160px', textAlign: 'center' }}>
                            <p onClick={() => setToggleShow(!toggleShow)}>{item.title}</p>
                            <p onClick={() => setToggleShow(!toggleShow)}>{item.novelType}</p>
                            {toggleShow &&
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', backgroundColor: 'rgba(255,255,255,0.5)' }} onClick={() => setToggleShow(!toggleShow)}>
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: 'auto', boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.31)', backgroundColor: '#fff' }}>
                                        {novel.map((item, i) => {
                                            return (
                                                <div key={i}>
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <div>
                                                            <img alt='cover' height='360px' width='250px' src={item.cover} style={{ margin: '20px' }} />
                                                        </div>
                                                        <div style={{ width: '600px' }}>
                                                            <h1 style={{ textAlign: 'left', margin: '20px 0 0 0' }}>{item.title}</h1>
                                                            <h3 style={{ textAlign: 'left', marginBottom: '20px' }}><img alt='writer' width='30px' src={item.writerImg} /> {item.writer}</h3>
                                                            <h3 style={{ textAlign: 'left', marginBottom: '20px' }}>{item.novelType}</h3>
                                                            <p style={{ textAlign: 'left' }}>{item.description}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    {novelContent.map((item, j) => {
                                                        return (
                                                            <div key={j} style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                                                                <div style={{ marginLeft: '40px' }} onClick={() => history.push({ pathname: '/read', state: { novelContent: novelContent, content: novelContent[j] } })}>
                                                                    EP.{item.episodeNumber} : {item.episodeTitle}
                                                                </div>
                                                                <div style={{ marginRight: '40px' }} onClick={() => { addBasketItem(item); setToggleBasket(true); }}>
                                                                    {(item.price > 0) ? `THB ${item.price}` : ''}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            }
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p><b>{(item.price === 0) ? '' : `THB ${item.price}`}</b></p>
                                {(item.price === 0) ? '' : <a href='#home'><img alt='basket' width='30px' src='https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png' onClick={() => { addBasketItem(item); setToggleBasket(true); }} /></a>}
                            </div>
                        </div>
                    </div>;
                })}
            </div>
        </div >
    );
}

export default OrderTest;