import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";
import Loading from "../03-examples/Loading";
import BlogEntry from "./BlogEntry";

export default function Layout() {
  const { counter, increment, decrement } = useCounter(0);
  const [blogEntry, setBlogEntry] = useState(null);
  const { data, isLoading, reFetch } = useFetch("./blog_entries.json");

  useEffect(() => {
    if (data) {
      const { blog_entries } = data;
      const blogEntry = blog_entries.find((entry, i) => i == counter);
      setBlogEntry(blogEntry);
    }
  }, [data]);

  useEffect(() => reFetch(), [counter]);

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16">
            {isLoading ? <Loading /> : blogEntry && <BlogEntry {...blogEntry} />}
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-between m-auto max-w-[25rem] items-center">
        <button
          onClick={() => counter > 0 && decrement()}
          className="p-4 bg-blue-600 rounded-lg text-white text-xl font-bold"
        >
          Anterior
        </button>
        <p className="text-lg">
          Página{counter > 1 && "s"} {counter}
        </p>
        <button
          onClick={() => increment()}
          className="p-4 bg-blue-600 rounded-lg text-white text-xl font-bold"
        >
          Siguiente
        </button>

      </div>
    </>
  );
}
