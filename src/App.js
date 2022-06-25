import React, {useState, useEffect, useRef} from "react"
import './App.css';


const App = () => {
  const [image, setImage] = useState(null);
  const canvas = useRef(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com/";
    catImage.onload = () => setImage(catImage);
  },[]);

  useEffect(() => {
    if(image && canvas){
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 700, 400+140+60);
      ctx.drawImage(image, (600-400)/2, 40);

      ctx.font = "20px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(topText, (700/2), 25);
      ctx.fillText(bottomText, (700/2), 580);
    }
  }, [image, canvas, topText, bottomText])

  return (
    <div className="App">
      <h1>Cat meme creator</h1>

      <div>
        <canvas 
            ref={canvas}
            width={700} 
            height={400 + 140 + 60}t
          />
          <div>
            Top......: 
            <input type="text" 
                value={topText} 
                onChange={(e) => setTopText(e.target.value)}/>
          </div>
          <div>
            Bottom: 
            <input type="text" 
                value={bottomText} 
                onChange={(e) => setBottomText(e.target.value)}/>
          </div>
      </div>
    </div>
  );
}

export default App;
