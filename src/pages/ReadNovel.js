import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Read() {
    const location = useLocation();
    const [content, setContent] = useState(location.state.content);
    const novelContent = [...location.state.novelContent];
    const [toggleIndex, setToggleIndex] = useState(false);

    return (
        <div style={{ backgroundColor: '#ccc', padding: '50px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0 auto 50px auto', maxWidth: '1000px', backgroundColor: '#fff', padding: '100px' }}>
                <div style={{ width: '120%', borderBottom: '1px solid #555', borderTop: '1px solid #555', marginBottom: '30px', height: '30px' }}>
                    <h2 onClick={() => setToggleIndex(!toggleIndex)} style={{ margin: '0 0 5px 50px' }}>Index ▼</h2>
                    <div style={{ width: '200px', margin: '0 0 5px 50px', padding: '5px' }}>
                        {toggleIndex && novelContent.map((item, i) => {
                            return (
                                <div key={i} style={{ margin: '0 0 5px', cursor: 'pointer' }} onClick={() => setContent(novelContent[i])}>
                                    EP{item.episodeNumber} : {item.episodeTitle}
                                </div>);
                        })}
                    </div>
                </div>
                <h1>Episode: {content.episodeNumber}</h1>
                <h2 style={{ marginBottom: '30px' }}>{content.episodeTitle}</h2>
                <p style={{ textAlign: 'justify', marginBottom: '50px' }}>{content.content}</p>
                <h2 style={{ margin: '0 50px 10px' }}>{!(novelContent[content.episodeNumber]) ? '' : `Next Episode: ${novelContent[content.episodeNumber].episodeTitle}`}</h2>
                {!(novelContent[content.episodeNumber]) ? '' : <button style={{ height: '30px', padding: '0 5px' }} onClick={() => setContent(novelContent[content.episodeNumber])}>Continue Reading</button>}
            </div>
        </div >
    );
}

export default Read;