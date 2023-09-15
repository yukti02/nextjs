import React, { useState } from 'react';
import { deleteSeries } from 'D:/TDC/nextjs/movie_app/src/pages/api/api.ts';

const DeleteSeriesForm = () => {
  const [seriesId, setSeriesId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const id = parseInt(seriesId);
      const responseMessage = await deleteSeries(id);
      setMessage(responseMessage);
    } catch (error) {
      setMessage('Error deleting series');
      console.error('Error deleting series:', error);
    }
  };

  return (
    <div>
      <h2>Delete Series</h2>
      <form>
        <label>
          Series ID:
          <input
            type="number"
            value={seriesId}
            onChange={(e) => setSeriesId(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteSeriesForm;
