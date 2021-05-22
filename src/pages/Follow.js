import { useState, useEffect } from 'react';
import axios from 'axios';
import localStorageService from '../services/localStorageService';

function Follow() {
    const [followlist, setFollowlist] = useState([]);
    const [novellist, setNovellist] = useState([]);

    const token = localStorageService.getToken();

    const fetchFollowing = async () => {
        const res = await axios.get('http://localhost:8000/user/follow', { headers: { 'Authorization': `Bearer ${token}` } });
        setFollowlist(res.data.followLists);
    };

    const fetchFollowNovel = async () => {
        const res = await axios.get('http://localhost:8000/user/follownovel', { headers: { 'Authorization': `Bearer ${token}` } });
        setNovellist(res.data.novelLists);
    };

    const unfollowWriter = async (id) => {
        await axios.delete(`http://localhost:8000/user/unfollow/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
        fetchFollowing();
    };

    const unfollowNovel = async (id) => {
        await axios.delete(`http://localhost:8000/user/unfollownovel/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
        fetchFollowNovel();
    };

    useEffect(() => {
        fetchFollowing();
        fetchFollowNovel();
    }, []);

    return (
        <div style={{ width: 'auto', minHeight: '100vh', padding: '50px' }}>
            <div style={{ margin: 'auto', width: '70%' }}>
                <h1 style={{ marginBottom: '50px' }}>Follow</h1>
                <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', textAlign: 'center', borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '10px' }}>
                    <h3 style={{ textAlign: 'left' }}>Follow Writers</h3>
                </nav>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                    {followlist.map((item, i) => {
                        return (
                            <div key={i} style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '10px' }}>
                                <img style={{ width: '200px' }} src={item.profileImg} alt="profileImg" />
                                <h3 style={{ textAlign: 'center', width: '200px' }}>{item.username}</h3>
                                <button style={{ width: '75px' }} onClick={() => unfollowWriter(item.unFollowId)}>Unfollow</button>
                            </div>
                        );
                    })}
                </div>
                <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', textAlign: 'center', borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '10px' }}>
                    <h3 style={{ textAlign: 'left' }}>Follow Novels</h3>
                </nav>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                    {novellist.map((item, i) => {
                        return (
                            <div key={i} style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '10px' }}>
                                <img style={{ width: '200px' }} src={item.cover} alt="coverImg" />
                                <h3 style={{ textAlign: 'center', width: '200px' }}>{item.title}</h3>
                                <button style={{ width: '75px' }} onClick={() => unfollowNovel(item.unFollowNovelId)}>Unfollow</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Follow;