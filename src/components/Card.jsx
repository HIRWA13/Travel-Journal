export default function Card(props) {
    console.log(props)
    return (
        <>
            <article>
                <div>
                    <img src={`/images/${props.item.imgUrl}`}/>
                </div>
                <div>
                    <img src="/images/point.svg"/>
                    <h1>{props.item.title}</h1>
                    <div>
                        <h1>from {props.item.startDate}</h1>
                        <h1>to {props.item.endDate}</h1>
                    </div>
                </div>
            </article>
        </>
    );
}