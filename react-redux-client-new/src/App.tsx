
import './App.css'
import Cars from './routes/cars'
import { Header } from './routes/header'
import Settings from './routes/settings'
import CarsStatistics from './routes/stats'

function App() {

    return (
        <>
            <div >
                <Header />
                <Cars />
                <CarsStatistics />
                <Settings />
            </div>
        </>
    )
}

export default App
