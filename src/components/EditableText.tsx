import { ReactNode, useRef, useState } from "react";

function EditableText({ children }: { children: ReactNode }) {
  const [isEditing, setIsEditing] = useState(false);
  const textContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="flex">
      {isEditing ? (
        <>
          <input
            type="text"
            className="flex"
            style={{
              width: `${textContainer.current?.clientWidth}px` ?? "auto",
            }}
            defaultValue={children as string}
            onBlur={() => {
              setIsEditing(false);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 inline-block ml-2 cursor-pointer hover:text-blue-500"
            onClick={() => setIsEditing(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </>
      ) : (
        <>
          <div ref={textContainer}>{children}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 inline-block ml-2 cursor-pointer hover:text-blue-500"
            onClick={() => setIsEditing(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </>
      )}
    </div>
  );
}

export default EditableText;
