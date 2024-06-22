import { useRef, useState } from "react";

function EditableText({
  value,
  onEdit,
}: {
  value: string;
  onEdit: (value: string) => void;
}) {
  const [text, setText] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const textContainer = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    setIsEditing(false);
    onEdit(text);
  };

  return (
    <div className="flex">
      {isEditing ? (
        <>
          <input
            type="text"
            className="flex outline-none border-b-2 box-content border-blue-500"
            style={{
              width: `${textContainer.current?.clientWidth}px` ?? "auto",
            }}
            value={text}
            // onBlur={() => {
            //   setIsEditing(false);
            // }}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                handleSubmit();
              }
            }}
            onChange={(event) => setText(event.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-3 inline-block ml-2 cursor-pointer hover:text-blue-500"
            onClick={handleSubmit}
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ) : (
        <>
          <div ref={textContainer}>{text}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-3 inline-block ml-2 cursor-pointer hover:text-blue-500"
            onClick={() => setIsEditing(true)}
          >
            <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
            <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
          </svg>
        </>
      )}
    </div>
  );
}

export default EditableText;
