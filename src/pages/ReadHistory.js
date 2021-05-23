import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import localStorageService from '../services/localStorageService';

function ReadHistory() {
    const history = useHistory();
    const token = localStorageService.getToken();

    const [histories, setHistories] = useState([]);
    const [novelContent, setNovelContent] = useState([]);
    const [toggleShow, setToggleShow] = useState(false);

    const fetchHistory = async () => {
        const res = await axios.get('http://localhost:8000/user/history', { headers: { 'Authorization': `Bearer ${token}` } });
        setHistories(res.data.histories);
    };

    const fetchNovelContent = async (id) => {
        const res = await axios.get(`http://localhost:8000/novel/content/${id}`);
        setNovelContent(res.data.episode);
    };

    const readHistory = async (id) => {
        await axios.post(`http://localhost:8000/user/read/${id}`, {}, { headers: { 'Authorization': `Bearer ${token}` } });
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div>
            <div style={{ width: 'auto', minHeight: '100vh', padding: '50px' }}>
                <div style={{ margin: 'auto', width: '70%' }}>
                    <h1 style={{ marginBottom: '50px' }}>Read History</h1>
                    <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 0.3fr', textAlign: 'center', borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '10px' }}>
                        <h3>Novel</h3>
                        <h3>Episode</h3>
                        <h3>Date</h3>
                        <h3>Time</h3>
                        <h3>Read</h3>
                    </nav>
                    <div>
                        {histories.map((item, i) => {
                            return (
                                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 0.3fr', textAlign: 'center', paddingBottom: '10px' }}>
                                    <p style={{ textAlign: 'left' }}>{item.novel}</p>
                                    <p style={{ textAlign: 'left' }}>{item.episodeTitle}</p>
                                    <p>{item.updatedAt.split('T')[0]}</p>
                                    <p>{item.updatedAt.split('T')[1].split('.')[0]}</p>
                                    <button onClick={() => { fetchNovelContent(item.episodeId); readHistory(item.episodeId); setToggleShow(!toggleShow); }}>Read</button>
                                </div>
                            );
                        })}
                    </div>
                    {toggleShow &&
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', backgroundColor: 'rgba(255,255,255,0.5)' }} onClick={() => { setToggleShow(!toggleShow); history.go(0); }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: 'auto', boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.31)', backgroundColor: '#fff' }}>
                                {novelContent.map((item, i) => {
                                    return (
                                        <div key={i} style={{ padding: '50px' }}>
                                            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>{item.title}</h1>
                                            <h1 style={{ textAlign: 'center' }}>Episode:{item.episodeNumber}</h1>
                                            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>{item.episodeTitle}</h2>
                                            <p style={{ textAlign: 'justify' }}>{item.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default ReadHistory;