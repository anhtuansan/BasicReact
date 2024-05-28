const ChildComponent = ({ message }) => {
  return (
    <div>
      <h2>Message from Parent:</h2>
      <p>{message}</p>
    </div>
  );
};

export default ChildComponent;
