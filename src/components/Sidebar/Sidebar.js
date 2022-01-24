import React, {useState} from 'react';
import UtilizationWidget from '../UtilizationWidget/UtilizationWidget';
import arrow from '../../assets/arrow.png';
import './Sidebar.css';

function Sidebar() {
    const [isWidgetVisible, setWidgetVisibility] = useState(false);
    const toggleWidgetVisibility = () => {
        setWidgetVisibility(prevValue => !prevValue);
    };

    return (
        <div className={`sidebar ${isWidgetVisible ? 'visible' : ''}`}>
            <button 
                className='toggle-btn'
                onClick={toggleWidgetVisibility}>
                <img 
                    className={isWidgetVisible ? 'toggle-btn-active' : ''} 
                    src={arrow}/>
            </button>
            <UtilizationWidget/>
        </div>
    )

}

export default Sidebar;
