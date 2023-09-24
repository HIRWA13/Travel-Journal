import { data } from 'autoprefixer';
import {travelData} from '../assets/travelData.js'
import Card from './Card.jsx'

export default function Cards() {
    const travel = travelData.map(data => {
        return <Card 
                key={data.id}
                item={data}
                />
    })
    return (
        <>  
            <h1>combined cards</h1>
            {travel}
        </>
    );
}