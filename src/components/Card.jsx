export default function Card(props) {
  console.log(props);
  return (
    <>
      <article className="w-3/4 mx-auto flex gap-4 items-center">
        <div className="w-2/6 flex-shrink-0">
          <img src={`/images/${props.item.imgUrl}`} className="w-full rounded-md" />
        </div>
        <div className="p-2 space-y-2">
          <div className="flex items-center gap-2">
            <img src="/images/point.svg" className="h-5"/>
            <p className="text-xl uppercase">{props.item.location}</p>
            <a href={props.item.googleMaps} className="underline font-light">View on google map</a>
          </div>
          <h1 className="text-2xl font-bold">{props.item.title}</h1>
          <div className="flex items-center gap-3">
            <h1><span className="font-semibold">from</span> {props.item.startDate}</h1>
            <h1><span className="font-semibold">to </span>{props.item.endDate}</h1>
          </div>
          <div>
            <p className="font-thin">{props.item.description}</p>
          </div>
        </div>
      </article>
    </>
  );
}
