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
            <section className='mt-10 mb-10 flex flex-col gap-4'>{travel}</section>
        </>
    );
}