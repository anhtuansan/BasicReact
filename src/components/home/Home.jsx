import { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  //Hàm xử lý sự kiện khi người dùng nhập dữ liệu vào input
  const handleChange = (event) => {
    setText(event.target.value); // Cập nhật state 'text'
  };

  return (
    <div>
      <p>{text}</p>
      {/* Input để người dùng nhập dữ liệu */}
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
    </div>
  );
}

export default Home;

// import "./Home.css";
// import { useState } from "react";

// function Home() {
//   const [name, setName] = useState("Tuan");

//   return (
//     <>
//       <p>Name: {name}</p>
//       {setName("guest")}
//       <p>Name: {name}</p>
//     </>
//   );
// }
// export default Home;

/*

import { useState } from "react";

function TestState() {
  // Khởi tạo trạng thái với giá trị ban đầu là 0
  const [name, setName] = useState("Tuan");

  // Hàm tăng giá trị trạng thái
  const changeName = () => {
    setName("guest"); // Gọi hàm setCount để cập nhật trạng thái
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>{name} la ai</p>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default TestState;

*/

// const cars =

// return (
//   <>
//     <table>
//       <tr>
//         <th>Carname</th>
//       </tr>

//       {cars.map((car, index) => (
//         <tr key={index}>
//           <td>{car}</td>
//         </tr>
//       ))}
//     </table>
//   </>
// );
