export default function Header() {
    return (
        <>
            <header className="bg-red-400 flex justify-center items-center p-2">
               <div className="flex gap-3 items-center">
                    <img src="/images/globe.svg"/>
                    <h1 className="text-white text-2xl cursor-pointer">My Travel Journal</h1>
               </div>
            </header>
        </>
    );
}