import ProductCard from "./productCard";

export default function OnSaleNow(){
    return(
        <div>
             <h1>On sale now</h1>
            <ProductCard
                name="Mac book"
                image="https://picsum.photos/seed/picsum/200/300" 
                price="500 $"
            />
            <ProductCard
                name="dell"
                image="https://picsum.photos/id/237/200/300"
                price="1000 $"
            />

        </div>
       

    )
}
    
    