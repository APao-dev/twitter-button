import './App.css'
import { TwitterFollowCards } from './TwitterFollowCards.jsx'

export function App () {

    return (
    <section className='App'>
        <TwitterFollowCards  userName="midudev">Miguel Angel </TwitterFollowCards> 

        <TwitterFollowCards  userName="APaoFernandez">Pao Fernandez </TwitterFollowCards>

        <TwitterFollowCards  userName="Naabarone"> Nahir </TwitterFollowCards>
    </section>
    )
}