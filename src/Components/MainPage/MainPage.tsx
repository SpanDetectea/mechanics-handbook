import { Link } from 'react-router-dom';
import './MainPage.scss'

const brands = ['skoda', 'audi', 'volkswagen']; // Марки должны браться из бд
const MainPage = () => {
    return <div className="MainPage">
        <h1 className='MainPage__header'>Пожалуйста, выберите марку автомобиля</h1>
 {/* окно ввода для поиска  */}
        <div className="MainPage__brands">
            {brands.map(item => <li className='MainPage__brands__brand'><Link to={item} className='MainPage__brands__brand__cursor'>{item}</Link></li>)}
        </div>
    </div>
}

export default MainPage;