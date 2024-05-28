import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [message, setMessage] = useState("Hello from Parent!");

  //Hàm xử lý sự kiện khi người dùng nhập dữ liệu vào input
  const handleChange = (event) => {
    setMessage(event.target.value); // Cập nhật state 'text'
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />

      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
