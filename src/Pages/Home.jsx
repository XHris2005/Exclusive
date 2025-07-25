import Flash_Sales from "../Components/Flash_Sales/Flash_Sales";
import Hero from "../Components/Hero/Hero";
import Browse_by_category from "../Components/Browse_by_category/Browse_by_category";
import Best_Selling from "../Components/Best_Selling/Best_Selling";
import Music_banner from "../Components/music_banner/Music_banner";
import Our_Product from "../Components/Our_products/Our_Products";
import New_arrival from "../Components/New_Arrival/New_arrival";
import Services from "../Components/our_services/Services";
const Home = () => {
    return (  
        <>
        <Hero></Hero>
        <Flash_Sales></Flash_Sales>
        <Browse_by_category></Browse_by_category>
        <Best_Selling></Best_Selling>
        <Music_banner></Music_banner>
        <Our_Product></Our_Product>
        <New_arrival></New_arrival>
        <Services></Services>
        </>
    );
}

export default Home;