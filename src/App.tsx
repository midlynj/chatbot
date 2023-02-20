/* eslint-disable */
import React, {useRef} from 'react';
import './App.css';

function App() {
    function handleInput() {
        let greeting : string[] = ["hello|hi"];
        // @ts-ignore
        let greetingOptions : any = new RegExp(greeting)
        // @ts-ignore
        let howAreYou : string[] = ["good|fine|ok|alright"];
        // @ts-ignore
        let feelingResponse : any = new RegExp(howAreYou);
        // @ts-ignore
        let getUserMessage : any = document.getElementById("text").value
        let clearMessage : any = document.getElementById("text")
        let uploadUserMessage : any = document.createElement("div");
        let uploadBotMessage : any = document.createElement("div");

        if (greetingOptions.test(getUserMessage)) {
            uploadUserMessage.innerHTML= getUserMessage ;
            uploadUserMessage.setAttribute("class","right");
            // @ts-ignore
            document.getElementById('bot').appendChild(uploadUserMessage);

            uploadBotMessage.innerText= "typing" ;

            setTimeout(() => {
            uploadBotMessage.innerText= "Hello There how are you doing today?"
                }, 2000);

            uploadBotMessage.setAttribute("class","left");

            // @ts-ignore
            document.getElementById('bot').appendChild(uploadBotMessage);

            clearMessage.value =""; // clear the input

        } else if (feelingResponse.test(getUserMessage)) {
            uploadUserMessage.innerHTML= getUserMessage;
            uploadUserMessage.setAttribute("class","right");
            // @ts-ignore
            document.getElementById('bot').appendChild(uploadUserMessage);

            uploadBotMessage.innerText= "typing" ;
            setTimeout(() => {
                uploadBotMessage.innerText= "That's good to hear. I'm doing great"
            }, 2000);

            uploadBotMessage.setAttribute("class","left");

            // @ts-ignore
            document.getElementById('bot').appendChild(uploadBotMessage);

            clearMessage.value = "";

        }else {
            uploadUserMessage.innerHTML= getUserMessage;
            uploadUserMessage.setAttribute("class","right");
            // @ts-ignore
            document.getElementById('bot').appendChild(uploadUserMessage);

            uploadBotMessage.setAttribute("class","left");
            // @ts-ignore
            document.getElementById('bot').appendChild(uploadBotMessage);
            uploadBotMessage.innerText = "Typing...";

            setTimeout(() => {
                uploadBotMessage.innerText =  ` ${getUserMessage.toUpperCase()}? I don't have access to that data. I don't even know what that means.`;
            }, 2000);

            clearMessage.value = "";

        }

    }
  return (
      <div className="App">

        <h2>RoboStacks</h2>

            <div id="bot">
              <h3>JAC</h3>
              <img style={{
                height:"5em"
              }} src="https://img.freepik.com/premium-vector/cute-robot-waving-hand-cartoon-character-science-technology-isolated_138676-3155.jpg?w=2000" alt="robot-logo"/>
            </div>


            <div className="bubbles">
                <p id="message1" className="bubble1"></p>
                <p id="message2"  className="bubble2"></p>
            </div>


        <div id="input">
          <input type="text" placeholder="Enter message" id="text"/>
          <button id="send" onClick={handleInput}>Send</button>
        </div>





      </div>

  );
}

export default App;
