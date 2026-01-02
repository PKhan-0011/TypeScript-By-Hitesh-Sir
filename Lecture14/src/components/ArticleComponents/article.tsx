interface articleObject {
  name: string;
  price: number;
  isSpecial?: boolean;
}

const Article = ({ name, price, isSpecial = false }: articleObject) => {
  return (
    <div>
      {name}
      <div>{price} </div>
      {isSpecial && (
        <div>
          <span>This is a special moment</span>
        </div>
      )}
    </div>
  );
};

export default Article;

// { name, price, isSpecial = false } this are props comes from parent div okkh!..

<Article name="Parvej" price={12} />; // ye isme props pass ho rahi hai okh!,,
