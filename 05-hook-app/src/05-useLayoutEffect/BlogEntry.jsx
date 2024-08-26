
import { useLayoutEffect, useRef, useState } from "react";

export default function BlogEntry({
  author,
  title,
  category,
  date,
  description,
}) {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const datetime = new Date(date).toLocaleDateString('en-US', dateOptions);

  const titleRef = useRef(null);
  const [ boxSize, setBoxSize ] = useState({});

  useLayoutEffect(() => {
    const { width, height } = titleRef.current.getBoundingClientRect();
      setBoxSize({ width, height });
  }, [title]);

  return (
      <article className="flex flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-gray-500">
            {datetime}
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {category}
          </a>
        </div>
        <div className="group text-left">
          <h3 ref={titleRef} className="w-fit mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4 text-left">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0" />
                {author.name}
              </a>
            </p>
            <p className="text-gray-600">{author.role}</p>
          </div>
        </div>
        <pre>
          <code className="languaje-javascript">
              {
                JSON.stringify(boxSize)
              }
          </code>
        </pre>
      </article>
  );
}
