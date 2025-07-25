import P1_img from './Havit_gamepad.png'
import P2_img from './Ak_Keyboard.png'
import P3_img from './Monitor-Cart-small.png'
import P4_img from './comfort_chair.png'
import I5_Star from './Five star.png'
import I4_Star from './Four star.png'
import I4h_Star from './Four Half Star.png'
import I3_Star from './Three Star.png'

let flash_sales_product = [
    {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            image: P1_img,
            new_price: 120,
            old_price: 160,
            star: I5_Star,
            discount: -35,
            no_star:88
        },
        {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            image: P2_img,
            new_price: 960,
            old_price: 1160,
            star: I4_Star,
            discount: -40,
            no_star:75
        },
        {
            id: 3,
            name: 'IPS LCD Gaming Monitor',
            image: P3_img,
            new_price: 370,
            old_price: 400,
            star: I5_Star,
            discount: -30,
            no_star: 79
        },
        {
            id: 4,
            name: 'S-Series Comfort Chair',
            image: P4_img,
            new_price: 375,
            old_price: 400,
            star: I4h_Star,
            discount: -25,
            no_star: 99
        },
]
export default flash_sales_product