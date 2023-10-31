const Card = ({ card }) => {
  return (
    <div className="card">
      {card.image}
      <p>{card.name}</p>
    </div>
  );
};
export default Card;
