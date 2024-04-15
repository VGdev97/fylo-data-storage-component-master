import logo from "./assets/logo.svg";
import document from "./assets/icon-document.svg";
import folder from "./assets/icon-folder.svg";
import upload from "./assets/icon-upload.svg";

function App() {
  return (
    <main className="h-screen flex flex-col bg-[#0c122c]  relative">
      <div className="hidden xl:block xl:h-[50%] "></div>
      <div className="bg-2 xl:h-[50%] ">
        {/* Entire */}
        <div className="flex flex-col xl:flex-row justify-center items-end gap-5 xl:gap-[60px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[50px] xl:px-[200px]">
          {/* Top */}
          <div className="flex-[0.30] h-[230px] bg-[#1e2c69] flex flex-col items-start justify-center w-full p-10 rounded-[10px] rounded-tr-[90px] ">
            <img src={logo} alt="logo" />

            <div className="flex items-center gap-3 mt-[30px]">
              <div className="p-3 bg-[#0c112f] rounded-[10px]">
                <img
                  src={document}
                  alt="document"
                  className="w-[23px] h-[23px]"
                />
              </div>
              <div className="p-3 bg-[#0c112f] rounded-[10px]">
                <img src={folder} alt="folder" className="w-[23px] h-[23px]" />
              </div>
              <div className="p-3 bg-[#0c112f] rounded-[10px]">
                <img src={upload} alt="upload" className="w-[23px] h-[23px]" />
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex-[0.70] relative bg-[#1e2c69] w-full px-10 pt-10 pb-20 xl:pb-10 rounded-[10px]">
            <p className="text-center text-[#a8b3eb] text-[17px]">
              You've used{" "}
              <span className="text-white font-semibold">815 GB </span>
              of your storage
            </p>
            {/* Slider */}
            <div class="bg-[#142048] h-7 w-full rounded-full my-4 relative">
              <article class="linear-gradient w-3/4 h-5 absolute top-1 left-1 rounded-full">
                <div class="bg-white rounded-full absolute right-[6px] top-[3px] w-[12px] h-[12px]"></div>
              </article>
            </div>
            {/* Under Slider */}
            <div class="flex justify-between items-center text-white">
              <p>0 GB</p>
              <p>1000 GB</p>
            </div>
            {/* Left Section */}
            <div className="flex items-center justify-center">
              <div className="bg-white py-[10px] px-[25px] rounded-[10px] xl:rounded-br-[0] absolute top-[80%] xl:top-[-50px] xl:right-[40px]">
                <div className="flex items-center justify-center gap-3">
                  <p className="text-[40px] font-bold">185</p>
                  <span className="uppercase text-[#8b8a8f] font-semibold">
                    gb left
                  </span>
                </div>
                <div class="triangle hidden xl:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
