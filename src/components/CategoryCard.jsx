import { Link } from 'react-router-dom'

export const CategoryCard = (props) => {
    const {category,alt,src,gradientColor} =props;
    return (
        <Link to={`/category/${category}`} className={`flex flex-col justify-between basis-1/4 bg-slate-500  bg-gradient-to-r from-lime-400 to-teal-500 transition-scale hover:scale-105 overflow-hidden rounded-2xl ${gradientColor}`}>
                <div className="p-5 justify-center items-center">
                    <img 
                        src={src} 
                        alt={alt} 
                        className='w-35'
                    />
                </div>
                <h1 className="text-2xl font-bold p-3 px-5 bg-opacity-80 text-stone-100 bg-stone-800">
                    {category}
                </h1>
        </Link>
    )
}

