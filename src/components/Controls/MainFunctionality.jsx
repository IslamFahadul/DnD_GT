import { useState } from "react";
import GridFunctionality from "./GridFunctionality";
import Images from "../Resources/Images.json";
import TopSection from "../Sections/TopSection";

export default function MainFunctionality() {
  const [items, setItems] = useState(Images);
  const [activeId, setActiveId] = useState(null);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleFileChange = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    setItems([...items, fileURL]);
  };

  const handleSelectAll = () => {
    if (isCheckAll) {
      setIsCheck([]);
    } else {
      setIsCheck(items.map((_, index) => index));
    }
    setIsCheckAll(!isCheckAll);
  };

  const handleCheck = (check) => {
    setIsCheck((prevCheck) =>
      prevCheck.includes(check)
        ? prevCheck.filter((item) => item !== check)
        : [...prevCheck, check]
    );
  };

  const handleDelete = () => {
    const checkedItems = items.filter((_, index) => !isCheck.includes(index));
    setItems(checkedItems);
    setIsCheck([]);
    setIsCheckAll(false);
  };

  const checkIsIntermediate = () => isCheck.length >= 1 && isCheck.length < items.length;

  return (
    <main className="bg-slate-100 min-h-[85vh]">
      <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
        <div className="mx-2 bg-white border rounded-lg min-h-[500px]">
          <div className="py-4 px-6 border-b">
            <TopSection
              isCheckAll={isCheckAll}
              isCheck={isCheck}
              handleSelectAll={handleSelectAll}
              handleDelete={handleDelete}
              checkIsIntermediate={checkIsIntermediate}
            />
          </div>
          <div>
            <GridFunctionality
              items={items}
              setItems={setItems}
              activeId={activeId}
              setActiveId={setActiveId}
              handleCheck={handleCheck}
              isCheck={isCheck}
              handleFileChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
