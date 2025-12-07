import { Bot, EllipsisVertical } from "lucide-react";
import { memo } from "react";

export const Heading = memo(() => {
  return (
    <div className="relative w-full px-3 py-3 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-gray-900 dark:text-lime-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center mt-1 space-x-2">
          <Bot size={25} />
          <h4 className="text-base font-mono text-gray-800 dark:text-lime-50 line-clamp-1 mt-0.5">
            Web Assistant
          </h4>
        </div>
        <button
          className="ml-2 text-gray-400 hover:text-indigo-600 p-1 transition-colors"
          title="More"
        >
          <EllipsisVertical size={15} />
        </button>
      </div>
    </div>
  );
});

export default Heading;
