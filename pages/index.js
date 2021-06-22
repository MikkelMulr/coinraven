import classes from '../styles/Home.module.css'
import {tokens} from '../data/dummy-data'
import TokenCard from '../components/ui/TokenCard/TokenCard'

export default function HomePage() {

  return (
    <div className={classes.Home}>
      <ul className={classes.HomeCards}>
        {tokens.map(token => <TokenCard data={token} />)}
      </ul>
    </div>
  )
}
