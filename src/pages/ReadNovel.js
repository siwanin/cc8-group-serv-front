import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import localStorageService from '../services/localStorageService';

function Read() {
    const location = useLocation();
    const [content, setContent] = useState(location.state.content);
    const [novelContent] = [...location.state.novelContent];
    const [toggleIndex, setToggleIndex] = useState(false);
    const [comment, setComment] = useState([]);
    const [userComment, setUserComment] = useState([]);
    const token = localStorageService.getToken();

    const readHistory = async (id) => {
        await axios.post(`http://localhost:8000/user/read/${id}`, {}, { headers: { 'Authorization': `Bearer ${token}` } });
    };

    const fetchComment = async (id) => {
        const res = await axios.get(`http://localhost:8000/novel/comment/${id}`);
        setComment(res.data.userComment);
    };

    const postComment = async (id) => {
        await axios.post(`http://localhost:8000/novel/comment/${id}`, { comment: userComment }, { headers: { 'Authorization': `Bearer ${token}` } });
        fetchComment(id);
    };

    const deleteComment = async (id) => {
        await axios.delete(`http://localhost:8000/novel/comment/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
        fetchComment(content.id);
    };

    useEffect(() => {
        readHistory(content.id);
        fetchComment(content.id);
    }, []);

    console.log(comment);

    return (
        <div style={{ backgroundColor: '#ccc', padding: '50px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0 auto 50px auto', maxWidth: '1000px', backgroundColor: '#fff', padding: '100px' }}>
                <div style={{ width: '120%', borderBottom: '1px solid #555', borderTop: '1px solid #555', marginBottom: '30px', height: '30px' }}>
                    <h2 onClick={() => setToggleIndex(!toggleIndex)} style={{ margin: '0 0 5px 50px' }}>Index ▼</h2>
                    <div style={{ width: '200px', margin: '0 0 5px 50px', padding: '5px' }}>
                        {toggleIndex && novelContent.map((item, i) => {
                            return (
                                <div key={i} style={{ margin: '0 0 5px', cursor: 'pointer' }} onClick={() => { setContent(novelContent[i]); setToggleIndex(false); }}>
                                    EP{item.episodeNumber} : {item.episodeTitle}
                                </div>);
                        })}
                    </div>
                </div>
                <h1>Episode: {content.episodeNumber}</h1>
                <h2 style={{ marginBottom: '30px' }}>{content.episodeTitle}</h2>
                <p style={{ textAlign: 'justify', marginBottom: '50px' }}>{content.content}</p>
                <h2 style={{ margin: '0 50px 10px' }}>{!(novelContent[content.episodeNumber]) ? '' : `Next Episode: ${novelContent[content.episodeNumber].episodeTitle}`}</h2>
                {!(novelContent[content.episodeNumber]) ? '' : <button style={{ height: '30px', padding: '0 5px' }} onClick={() => { setContent(novelContent[content.episodeNumber]); setToggleIndex(false); readHistory(content.id + 1); }}>Continue Reading</button>}
                <div style={{ width: '100%' }}>
                    <form onSubmit={(e) => { e.preventDefault(); postComment(content.id); setUserComment(''); }} style={{ marginBottom: '10px' }}>
                        <h3>Comment </h3>
                        <input type='text' value={userComment} onChange={(e) => setUserComment(e.target.value)} placeholder='Comment' style={{ width: '100%', minHeight: '50px' }} />
                        <button type='submit'> Comment </button>
                    </form>
                    <hr />
                    {comment.map((item, i) => {
                        return (
                            <div key={i}>
                                <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {item.User.username}
                                    <button onClick={() => { deleteComment(comment[i].id); }}> x </button>
                                </h3>
                                <p style={{ fontSize: '10px', marginBottom: '10px' }}>{item.updatedAt.split('T')[0]}</p>
                                <p style={{ marginBottom: '10px' }}>{item.comment}</p>
                                <hr />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >
    );
}

export default Read;