import "notyf/notyf.min.css";

export default function AuthLayout({ children }) {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0-w-[30rem]">
        { children }
      </div>
    </section>
  )
}