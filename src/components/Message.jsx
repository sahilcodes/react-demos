const Message = (props) => {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
};

export default Message;
