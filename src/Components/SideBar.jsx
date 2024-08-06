import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate(); // Updated: useNavigate instead of useHistory
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [ratingFilters, setRatingFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    // Update the checkboxes based on the initial params in the URL
    const ratings = searchParams.getAll('rating');
    const order = searchParams.get('order');
    setRatingFilters(ratings);
    setSortOrder(order || '');
  }, [location.search,searchParams]);

  const handleRatingChange = (event) => {
    const value = event.target.value;
    let updatedFilters = [...ratingFilters];

    if (updatedFilters.includes(value)) {
      updatedFilters = updatedFilters.filter((rating) => rating !== value);
    } else {
      updatedFilters.push(value);
    }

    setRatingFilters(updatedFilters);
    updateUrl({ ratings: updatedFilters, order: sortOrder });
  };

  const handleSortOrderChange = (event) => {
    const value = event.target.value;
    setSortOrder(value);
    updateUrl({ ratings: ratingFilters, order: value });
  };

  const updateUrl = ({ ratings, order }) => {
    const params = new URLSearchParams();
    ratings.forEach((rating) => params.append('rating', rating));
    if (order) params.set('order', order);

    navigate({ search: params.toString() }); // Updated: useNavigate to change URL
  };

  return (
    <aside className='sidebar'>
      <h3>Filter by Rating</h3>
      {[2, 3, 4, 5].map((rating) => (
        <div key={rating}>
          <input
            id={rating}
            type="checkbox"
            value={rating}
            checked={ratingFilters.includes(rating.toString())}
            onChange={handleRatingChange}
          />
          <label htmlFor={rating}>{Array.from({length:rating}).map((item,index)=>(<span key={index}>★ </span>))} </label>
        </div>
      ))}

      <h3>Sort by Year</h3>
      <div>
        <input
        id="newest"
          type="radio"
          value="asc"
          checked={sortOrder === 'asc'}
          onChange={handleSortOrderChange}
        />
        <label htmlFor='newest'>Ascending</label>
      </div>
      <div>
        <input
        id='oldest'
          type="radio"
          value="desc"
          checked={sortOrder === 'desc'}
          onChange={handleSortOrderChange}
        />
        <label htmlFor='oldest'>Descending</label>
      </div>
    </aside>
  );
};

export default SideBar;
