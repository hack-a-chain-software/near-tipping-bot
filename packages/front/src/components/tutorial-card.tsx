import Highlighter from "react-highlight-words";

export const TutorialCard = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => (
  <div>
    <div className="mb-6 text-center">
      <h3
        children={`Step ${index + 1}`}
        className="font-extrabold text-xl text-white"
      />
    </div>

    <div
      className="
        bg-grey-100/[0.5] rounded-xl max-w-[250px] w-screen flex flex-col items-center justify-start text-center
        pt-6 pb-10 px-7 mx-auto h-[228px]
      "
    >
      <div className="mb-5">
        <Highlighter
          textToHighlight={title}
          searchWords={["server", "tokens", "wallet"]}
          highlightClassName="text-pink bg-transparent flex flex-col"
          className="font-semibold text-2xl text-white"
        />
      </div>

      <div>
        <Highlighter
          textToHighlight={description}
          className="font-thin text-base text-white"
          highlightClassName="text-pink bg-transparent"
          searchWords={["/register", "/addtoken", "/setwallet", "/send"]}
        />
      </div>
    </div>
  </div>
);

export default TutorialCard;
