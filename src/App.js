import './App.css'
import Card from './components/Card'

function App() {
    return (
        <div className="app">
            <h1>Adivina el personaje de Momo</h1>
            <p>Presta atención a las pistas, descarta personajes y adivina el personaje.</p>
            <br/>
            <div className='app_container'>
                <Card name="Momo" />
                <Card name="Beppo Barrendero" />
                <Card name="Gigi Cicerones" />
                <Card name="Blanco" />
                <Card name="Hombres Grises" />
                <Card name="Paolo" />
                <Card name="Señor Fusi" />
                <Card name="Maria" />
                <Card name="Massimo" />
                <Card name="Nicola" />
                <Card name="Nino" />
            </div>
        </div>
    );
}

export default App;
