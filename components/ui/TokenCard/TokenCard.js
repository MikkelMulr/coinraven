import classes from '../../../styles/TokenCard.module.css'

export default function TokenCard({data}) {
  return (
    <div className={classes.TokenCard}>
      <section className={classes.TokenCardInfo}>
        <h2 className={classes.TokenCardPrice}>{data.price}</h2>
      </section>
      <header>
        <h2>{data.symbole}</h2>
        <p>{data.name}</p>
      </header>
    </div>
  )
}
