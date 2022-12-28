import Card from './Card'
import '../css/Main.css'
import data from '../data'

export default function Main() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.key}
                {...item}
            />
        )
    })
    
    return (
        <main className="main">
            {cards}
        </main>
    )
}