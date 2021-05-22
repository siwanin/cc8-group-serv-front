import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import localStorageService from '../services/localStorageService';

function ReadHistory() {
    const history = useHistory();
    const token = localStorageService.getToken();

    const [histories, setHistories] = useState([]);
    const [novelContent, setNovelContent] = useState([]);

    const fetchHistory = async () => {
        const res = await axios.get('http://localhost:8000/user/history', { headers: { 'Authorization': `Bearer ${token}` } });
        setHistories(res.data.histories);
    };

    const fetchNovelContent = async () => {
        for (let item of histories) {
            const res = await axios.get(`http://localhost:8000/novel/content/${item.episodeId}`);
            setNovelContent(prev => [...prev, res.data.episode[0]]);
        }
    };

    if (novelContent === []) fetchNovelContent();

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
                                    <button onClick={() => { history.push({ pathname: '/read', state: { novelContent: [novelContent[0]], content: novelContent[i] } }); }}>Read</button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadHistory;