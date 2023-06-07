// export default function Travendo({travendo} : {travendo : boolean}) {
export default function Travendo() {

    return (
        <div className="flex items-center p-4 flex-row w-[100vw] transition-opacity duration-150 ease-in-out rounded-md shadow-md opacity-100">
            <div className="flex flex-col gap-3 p-4 basis-1/2">
                <span>An E-commerce App</span>
                <span className="text-5xl">Travendo</span>
                <span className="text-xl">Online platform for ordering authenticate food products.</span>
            </div>
        </div>
    )
}