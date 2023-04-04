import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-[#D6E2F0] font-outfit">
        <div className=" flex flex-col bg-white rounded-[20px] shadow p-4">
          <img className="flex rounded-[10px] w-[270px] l-[250px]" src="/image-qr-code.png"></img><br/>
          <h2 class="text-lg text-center text-[#1F3251] font-bold mb-2 break-words">Improve your front-end <br/>skills by building projects</h2>
          <p class="text-sm text-center  font-normal text-[#7B879D] mb-3">Scan the QR code to visit Frontend<br/> Mentor and take your coding skills to <br/>the next level</p>
        </div>



      </div>




    </div>
  );
}

export default App;
