import React, {useState, useEffect} from 'react';
import CarIcon from '../Icons/CarIcon';
import TabSelector from '../TabSelector/TabSelector';
import {vehiclesApi} from '../../config';
import './UtilizationWidget.css';

const carStyleMapping = {
    available: {
        name: 'Available',
        color: '#5eebc8'
    },
    carpool: {
        name: 'Carpool',
        color: '#b27cf9'
    },
    regular: {
        name: 'Regular rides',
        color: '#0cadfe'
    }
};
const BAR_VIEW = 'bar-view';
const TEXT_VIEW = 'text-view';

function UtilizationWidget(props) {
    const [viewMode, setViewMode] = useState(BAR_VIEW);
    const [carUsage, setCarUsage] = useState({});

    const getCatUsage = () => {
        fetch(vehiclesApi)
            .then(response => response.json())
            .then(data => {
                setCarUsage(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        getCatUsage();

        let intervalID = setInterval(getCatUsage, 5000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    const amount = Object.values(carUsage).reduce((prev, curr) => prev + curr, 0)

    return (
        <div className='utilization-widget'>
            <TabSelector
                activeValue={viewMode}
                options={[
                    {
                        label: 'Utilization Bars',
                        value: BAR_VIEW
                    },
                    {
                        label: 'Utilization Text',
                        value: TEXT_VIEW
                    }
                ]}
                onSelect={setViewMode}/>
            <div className='utilization-widget-content'>
                <div className='utilization-widget-header'>
                    Utilization({amount})
                </div>
                {
                    viewMode === BAR_VIEW
                    ? <div className='item-list'>
                        {
                            Object
                                .entries(carUsage)
                                .map(([key, value]) => {
                                    const {name, color} = carStyleMapping[key];

                                    return (
                                        <div 
                                            key={key}
                                            className='item'>
                                            <span>{name}</span>
                                            <div className='item-data'>
                                                <CarIcon fill={color}/>
                                                {/* <progress max="100" value={value * 100 / amount}/> */}
                                                <div className="item-progress">
                                                    <div className="item-progress-bar" style={{height: '2px', width: `${value * 100 / amount}%`, background: color}}/>
                                                </div>
                                                <span>{value}</span>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                    : <ul>
                        {
                             Object
                             .entries(carUsage)
                             .map(([key, value]) => (
                                 <li>
                                     {carStyleMapping[key].name} : {value}
                                 </li>
                             ))
                        }
                    </ul>
                }
            </div>
        </div>
    );
}

export default UtilizationWidget;
