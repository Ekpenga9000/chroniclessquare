"use strict";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addTitle } from "@redux/slices/articleSlice";

const TitleInput = () => {
  const dispatch = useDispatch();
  const { title } = useSelector((state: RootState) => state.article.value);
  const [formTitle, setFormTitle] = useState(title);
  const [titleValue, setTitleValue] = useState("");
  const [formActivated, setFormActivated] = useState(title ? false : true);

  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formTitle.trim()) return;
    dispatch(addTitle(formTitle));
    setTitleValue(formTitle);
    setFormActivated(false);
  };

  const handleEdit = () => {
    setFormActivated(true);
  };
  return (
    <>
      {formActivated ? (
        <form onSubmit={handleSumit} className="flex items-start gap-2 p-2">
          <label htmlFor="title" className="cursor-pointer relative me-4">
            <i className="bx bx-plus text-3xl text-gray-500 absolute top-2"></i>
          </label>
          <textarea
            id="title"
            name="title"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="p-2 rounded-md bg-transparent outline-none text-2xl w-full fleex-wrap"
            placeholder="Title ..."
          ></textarea>
          <div className="flex justify-end my-4">
            <button className="text-xs bg-gray-400 py-1 px-2 rounded-md">
              Add
            </button>
          </div>
        </form>
      ) : null}
      {titleValue !== "" && !formActivated ? (
        <div className="flex justify-start items-center px-2">
          <i
            className="bx bxs-edit-alt text-gray-400 hover:text-gray-600"
            onClick={handleEdit}
          ></i>
          <h2 className="text-3xl font-bold ml-2 mb-4">{titleValue}</h2>
        </div>
      ) : null}
    </>
  );
};

export default TitleInput;
