import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    // console.log('data aa gya');
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    // console.log(response.data);

    setUserData(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading ...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black text-white h-screen p-4 overflow-auto">
      {/* <h1 className='fixed text-6xl bg-red-500'>{index}</h1> */}
      {/* <button 
    onClick={getData}
    className='bg-green-600 text-white px-5 py-2 rounded-full m-4 active:scale-90'>getData</button> */}

      <div className="flex flex-wrap gap-8 h-[82%]">{printUserData}</div>

      <div className="flex justify-center items-center p-4 gap-7">
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            disabled={index === 1}
            onClick={() => {
              // console.log('Prev button');
              if (index > 1) {
                setIndex(index - 1);
                setUserData([]);
              }
            }}
            className="bg-amber-400 active:scale-90 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer"
          >
            Prev
          </button>

          <h4>Page {index}</h4>

          <button
            onClick={() => {
              // console.log('Next button');
              setIndex(index + 1);
              setUserData([]);
            }}
            className="bg-amber-400 active:scale-90 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
