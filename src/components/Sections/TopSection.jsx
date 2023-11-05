import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Checkbox from "./Checkbox";

export default function TopSection({
  isCheckAll, isCheck, handleSelectAll, checkIsIntermediate, handleDelete,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      {isCheck.length > 0 ? (
        <div className="mb-[0.125rem] block min-h-[1.5rem]">
          <div className="flex items-center">
            <Checkbox
              id="selectAll"
              className="relative float-left mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] accent-blue-500"
              type="checkbox"
              name="selectAll"
              handleClick={handleSelectAll}
              isChecked={isCheckAll}
              ref={(input) => input && (input.indeterminate = checkIsIntermediate())}
            />
            <label
              className="font-semibold inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="selectAll"
            >
              {isCheck.length} Files Selected
            </label>
          </div>
          <div>
            <button onClick={handleDelete} className="bg-white border-0 text-red-400">
              Delete Files
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="font-semibold inline-block pl-[0.15rem] hover:cursor-pointer">
            Gallery
          </div>
          <div className="flex flex-row-reverse sm:flex-row items-center justify-end gap-2 text-sm text-gray-500">
            Select Image
            <span>
              <ExclamationCircleIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
