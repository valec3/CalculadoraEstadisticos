import {imgs,categories} from "../data";
import { CategoryCard } from './CategoryCard';


const [imgCiencia,imgDeporter,imgFilosofia,imgGeografia,imgHistoria,imgLiteratura,imgTecnologia] = imgs;

export const CategoryList = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'> 
            {/*Categoria Python*/}
            <CategoryCard 
                category={categories.ciencia} 
                alt={`Categoria ${categories.ciencia}`}
                src ={imgCiencia}
                gradientColor="from-lime-400 to-teal-500"
            />
            {/*Categoria Python*/}
            <CategoryCard 
                category={categories.ciencia} 
                alt={`Categoria ${categories.ciencia}`}
                src ={imgCiencia}
                gradientColor="from-lime-400 to-teal-500"
            />
            {/*Categoria Python*/}
            <CategoryCard 
                category={categories.ciencia} 
                alt={`Categoria ${categories.ciencia}`}
                src ={imgCiencia}
                gradientColor="from-lime-400 to-teal-500"
            />
            {/*Categoria Python*/}
            <CategoryCard 
                category={categories.ciencia} 
                alt={`Categoria ${categories.ciencia}`}
                src ={imgCiencia}
                gradientColor="from-lime-400 to-teal-500"
            />
            {/*Categoria Python*/}
            <CategoryCard 
                category={categories.ciencia} 
                alt={`Categoria ${categories.ciencia}`}
                src ={imgCiencia}
                gradientColor="from-lime-400 to-teal-500"
            />
            {/*Categoria Python*/}
            <CategoryCard 
                category={categories.ciencia} 
                alt={`Categoria ${categories.ciencia}`}
                src ={imgCiencia}
                gradientColor="from-lime-400 to-teal-500"
            />
            
        </div>
    )
}

export default CategoryList