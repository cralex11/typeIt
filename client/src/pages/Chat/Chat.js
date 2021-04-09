import "./Chat.css";

const Chat = () => {
  const row = () => {
    return (
      <div
        className="
      chat-row bg-gray-800 transition hover:bg-gray-700
      "
      >
        <div
          className="
        img-wrapper
        flex justify-center items-center

        "
        >
          <img
            src="https://source.unsplash.com/100x100/?avatar,people"
            alt="avatar"
            className="
            object-cover
            border-2 border-green-500 rounded-full
            overflow-hidden

            "
          />
        </div>
        <div className="row-text flex flex-col justify-center">
          <h6 className="name">Emiline</h6>
          <p
            className="message-text
            font-light
          "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            autem beatae culpa earum, eos excepturi fugiat hic iste iusto
            mollitia necessitatibus, non sequi sint ut voluptate. Consequuntur
            doloremque eligendi in!
          </p>
        </div>
        <div className="message-info flex flex-col items-end">
          <p className="time-ago">23 min</p>
          <span
            className="count-messages
            flex justify-center items-center
            w-8 h-8
            rounded-full
            "
          >
            12
          </span>
        </div>
      </div>
    );
  };
  const repete = () => {
    let itm = [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
    return itm.map(() => row());
  };

  return <div className="chat h-full">{repete()}</div>;
};

export default Chat;
