import { useLocation } from 'react-router-dom';

function Read() {
    const location = useLocation();
    const novelContent = location.state;
    console.log(novelContent);

    return (
        <div>

        </div>
    );
}

export default Read;