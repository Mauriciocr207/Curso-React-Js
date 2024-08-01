import { number } from "prop-types";

export default function Banner({ done, pending }) {
  return (
    <div className="bg-gray-200 text-left py-2.5 px-4 mb-4 rounded-t-md flex gap-6">
      {
        !!done && <>
          <div className="inline-flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <p className="text-xs font-semibold text-green-700">Done: { done }</p>
          </div>
        </>
        
      }
      {
        !!pending && <>
          <div className="inline-flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
            <p className="text-xs font-semibold text-orange-700">Pending: { pending }</p>
          </div>
        </>
        
      }
    </div>
  );
}

Banner.propTypes = {
  done: number.isRequired,
  pending: number.isRequired
}
