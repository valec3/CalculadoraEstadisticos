
export const Question = () => {
    return (
        <div className='flex flex-col justify-between shadow-md shadow-slate-300 p-10 rounded-lg w-[38rem] h-[38rem]'>
            <div className="flex justify-between">
                <span className="text-xl font-bold">
                    {/*nmr question*/}
                </span>
                <div>
                    <span className="font-semibold">
                        Dificultad: 
                    </span>
                    <span className="font-bold">

                    </span>
                </div>
            </div>
            <button className="border px-5 py-2 rounded-lg font-bold transition-all hover:bg-green-500">
                Reiniciar
            </button>
            <div>
                <h2 className="font-bold">Cuales son los pilares de la programacion orientada a objetos</h2>
            </div>
        </div>
    )
}
