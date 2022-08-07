const Button = (props) => {
  const { name } = props;
  const btnElement = <button className="btn {name}">{name}</button>;
  return btnElement;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button name="Like" />
      <Button name="Comment" />
      <Button name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
