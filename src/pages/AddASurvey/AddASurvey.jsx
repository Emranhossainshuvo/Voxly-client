import React, { useState } from 'react';

const SurveyForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState('Yes');
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [category, setCategory] = useState('');

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDislike = () => {
    setDislike(dislike + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md" onSubmit={handleSubmit}>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label className="block mb-2">
        Options:
        <select
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label className="block mb-2">
        Like: {like}
        <button
          type="button"
          className="ml-2 px-3 py-1 border rounded-md bg-green-500 text-white"
          onClick={handleLike}
        >
          Like
        </button>
      </label>

      <label className="block mb-2">
        Dislike: {dislike}
        <button
          type="button"
          className="ml-2 px-3 py-1 border rounded-md bg-red-500 text-white"
          onClick={handleDislike}
        >
          Dislike
        </button>
      </label>

      <label className="block mb-2">
        Category:
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="w-full px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default SurveyForm;
