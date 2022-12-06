import "./App.css";
import "./components/Sidebar";
import "./components/Reviews";
import "./components/Average";
import "./components/SentimentAnalysis";
import "./components/Website";
import Average from "./components/Average";
import Reviews from "./components/Reviews";
import Sentiment from "./components/SentimentAnalysis";
import Sidebar from "./components/Sidebar";
import Website from "./components/Website";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <div className="top">
          <Reviews />
          <Average />
          <Sentiment />
        </div>
          <Website />
      </div>
    </div>
  );
}

export default App;
