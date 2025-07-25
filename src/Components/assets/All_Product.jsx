import P1_img from './Havit_gamepad.png'
import P2_img from './AK_Keyboard.png'
import P3_img from './Monitor-Cart-Small.png'
import P4_img from './comfort_chair.png'
import I5_Star from './Five star.png'
import I4_Star from './Four Star.png'
import I4h_Star from './Four Half Star.png'
import I3_Star from './Three Star.png'
import P5_img from './north_coat.png'
import P6_img from './Gucci.png'
import P7_img from './RGB.png'
import P8_img from './bookshelf.png'
import P9_img from './dog_food.png'
import P10_img from './camera.png'
import P11_img from './Laptop.png'
import P12_img from './curology.png'
import P13_img from './kids_car.png'
import P14_img from './cleats.png'
import P15_img from './gamepad.png'
import P16_img from './satin_jacket.png'

let all_products = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',            
        image: P1_img,
        new_price: 120,
        old_price: 160,
        star: I5_Star,
        discount: -35,
        no_star: 88,
        Category:'Gaming'
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        image: P2_img,
        new_price: 960,
        old_price: 1160,
        star: I4_Star,
        discount: -40,
        no_star: 75,
        Category:'Gaming'
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        image: P3_img,
        new_price: 370,
        old_price: 400,
        star: I5_Star,
        discount: -30,
        no_star: 79,
        Category: 'Gaming'
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        image: P4_img,
        new_price: 375,
        old_price: 400,
        star: I4h_Star,
        discount: -25,
        no_star: 99,
        Category:'furniture'
    },
    {
        id: 5,
        name: 'The North Coast',
        image: P5_img,
        new_price: 260,
        star: I5_Star,
        no_star:97,
        Category:'Clothing'
    },
    {
        id: 6,
        name: 'Gucci Duffle Bag',
        image: P6_img,
        new_price: 960,
        star: I4h_Star,
        no_star:74,
        Category:'Clothing'
    },
    {
        id: 7,
        name: 'RGB Liquid CPU Cooler',
        image: P7_img,
        new_price: 160,
        star: I4h_Star,
        no_star:87,
        Category:'Gaming'
    },
    {
        id: 8,
        name: 'Small BookShelf',
        image: P8_img,
        new_price: 360,
        star: I5_Star,
        no_star:82,
        Category:'Furniture'
    },
    {
        id: 9,
        name: 'Breed Dry Dog Food',
        image: P9_img,
        new_price: 100,
        star: I3_Star,
        no_star:62,
        Category:'Groceries'
    },
    {
        id: 10,
        name: 'CANON EOS DSLR Camera',
        image: P10_img,
        new_price: 360,
        star: I4h_Star,
        no_star:79,
        Category:'Electronics'
    },
    {
        id: 11,
        name: 'ASUS FHD Gaming Laptop',
        image: P11_img,
        new_price: 700,
        star: I4h_Star,
        no_star:75,
        Category:'Gaming'
    },
    {
        id: 12,
        name: 'Curology Product Set',
        image: P12_img,
        new_price: 500,
        star: I5_Star,
        no_star:100,
        Category:'Beauty'
    },
    {
        id: 13,
        name: 'Kids Electric Car',
        image: P13_img,
        new_price: 960,
        star: I4h_Star,
        no_star:64,
        Category:'Electronics'
    },
    {
        id: 14,
        name: 'Jr. Zoom Soccer Cleats',
        image: P14_img,
        new_price: 1160,
        star: I4h_Star,
        no_star:74,
        Category:'Clothing'
    },
    {
        id: 15,
        name: 'GP11 Shooter USB Gamepad',
        image: P15_img,
        new_price: 660,
        star: I5_Star,
        no_star:105,
        Category:'Gaming'
    },
    {
        id: 16,
        name: 'Quilted Satin Jacket',
        image: P16_img,
        new_price: 660,
        star: I4_Star,
        no_star:74,
        Category:'Clothing'
    }
]
export default all_products