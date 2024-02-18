import './App.css'
import Card from './components/Card'

const App = () => {
    return (
        <div className="app">
            <h1>Adivina el personaje de Momo 🕰️🐢⏳</h1>
            <p>Presta atención a las pistas, descarta personajes y adivina el personaje.</p>
            <div className='app_container'>
                <Card name="Momo" emoji="👧" />
                <Card name="Beppo Barrendero" emoji="🧹"/>
                <Card name="Gigi Cicerones" emoji="📖️"/>
                <Card name="Massimo" emoji="👦🏾" />
                <Card name="Hombres Grises" emoji="👤"/>
                <Card name="Paolo" emoji="👦🏻"/>
                <Card name="Señor Fusi" emoji="💈"/>
                <Card name="Maria" emoji="👧🏻"/>
                <Card name="Blanco" emoji="👦🏼"/>
                <Card name="Nicola" emoji="🛠️"/>
                <Card name="Nino" emoji="🏨"/>
            </div>
        </div>
    );
}

export default App;
