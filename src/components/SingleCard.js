import { Card } from './styles/SingleCard.styled'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleFlip = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <Card>
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="./img/cover.jpg"
          alt="card back"
          onClick={handleFlip}
        />
      </div>
    </Card>
  )
}

export default SingleCard
