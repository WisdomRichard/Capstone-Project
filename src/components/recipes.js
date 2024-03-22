import GreekSalad from '../assets/greek salad.jpg'
import Bruschetta from '../assets/bruchetta.svg'
import LemonDessert from '../assets/lemon dessert.jpg'


const recipes = [
    {
        id: 1,
        title: 'Greek Salad',
        price: 12.00,
        image: `${GreekSalad}`,
        description: 'This easy Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.',
    },
    {
        id: 2,
        title: 'Bruschetta',
        price: 6.00,
        image: `${Bruschetta}`,
        description: 'Bruschetta (pronounced as Bru-Sketta) is an Italian appetizer or snack that is served before meal. In Italy, it is known as antipasto.',
    },
    {
        id: 3,
        title: 'Lemon Dessert',
        price: 5.00,
        image: `${LemonDessert}`,
        description: 'Stunning lemon sponge cake, a creamy citrus cheesecake or a zesty sorbet with our best-ever lemon dessert recipes, perfect for entertaining.',
    }
]

export default recipes;