import P5_img from './north_coat.png'
import P6_img from './Gucci.png'
import P7_img from './RGB.png'
import P8_img from './bookshelf.png'
import I5_Star from './Five star.png'
import I4_Star from './Four Star.png'
import I4h_Star from './Four Half Star.png'
import I3_Star from './Three Star.png'

let Best_selling_product = [
    {
            id: 5,
            name: 'The North Coast',
            image: P5_img,
            new_price: 260,
            old_price: 360,
            star: I5_Star,
            discount: -15,
            no_star:97
        },
        {
            id: 6,
            name: 'Gucci Duffle Bag',
            image: P6_img,
            new_price: 960,
            old_price: 1160,
            star: I4h_Star,
            discount: -25,
            no_star:74
        },
        {
            id: 7,
            name: 'RGB Liquid CPU Cooler',
            image: P7_img,
            new_price: 160,
            old_price: 170,
            star: I4h_Star,
            discount: -5,
            no_star:87
        },
        {
            id: 8,
            name: 'Small BookShelf',
            image: P8_img,
            new_price: 360,
            old_price: 460,
            star: I5_Star,
            discount: -25,
            no_star:82
        },
]
export default Best_selling_product