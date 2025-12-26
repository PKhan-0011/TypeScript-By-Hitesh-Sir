import "./App.css";
import Article from "./components/ArticleComponents/article";
import Counter from "./components/Counter/counter";

function App() {
  return (
    <>
      <div>
        <Article name="HeadPhone" price={500} isSpecial={true} />
        <div>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
