import { string } from "prop-types";

export default function GifItem({ title, url }) {

  return (
    <div className="overflow-hidden relative" data-testid="GifItem">
      <div className="hover:opacity-75 opacity-0 transition-opacity duration-500 absolute overflow-y-auto p-2 bg-black w-full h-full rounded-lg flex">
        <p
          className="font-normal opacity-80 text-white text-center w-full p-2"
        >
          {title}
        </p>
      </div>
      <img
        className="h-full max-w-full rounded-lg object-cover object-center"
        src={url}
        alt={title}
      />
    </div>
  );
}

GifItem.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
};
