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
