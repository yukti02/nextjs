import React, { useState, useEffect } from 'react';
import { getSeriesById, updateSeries } from 'D:/TDC/nextjs/movie_app/src/pages/api/api.ts';

interface SeriesDetails {
  name: string;
  description: string;
  release_year: number;
  rating: number;
  reviews: number;
}

const UpdateSeriesForm: React.FC = () => {
  const [seriesId, setSeriesId] = useState<string>('');
  const [seriesDetails, setSeriesDetails] = useState<SeriesDetails | null>(null);

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [releaseYear, setReleaseYear] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [reviews, setReviews] = useState<string>('');

  const handleGetDetails = async () => {
    try {
      const id = parseInt(seriesId);
      const seriesData = await getSeriesById(id);
      setSeriesDetails(seriesData);

      setName(seriesData.name);
      setDescription(seriesData.description);
      setReleaseYear(seriesData.release_year.toString());
      setRating(seriesData.rating.toString());
      setReviews(seriesData.reviews.toString());
    } catch (error) {
      console.error('Error fetching series details:', error);
    }
  };

  const handleUpdateSeries = async () => {
    try {
      const id = parseInt(seriesId);
      const updatedSeriesData = {
        name,
        description,
        release_year: parseInt(releaseYear),
        rating: parseFloat(rating),
        reviews: parseInt(reviews),
      };

      await updateSeries(id, updatedSeriesData);
      alert('Series updated successfully');
    } catch (error) {
      console.error('Error updating series:', error);
    }
  };

  useEffect(() => {
    setSeriesDetails(null);
  }, [seriesId]);

  return (
    <div>
      <h2>Update Series Details</h2>
      <form>
        <label>
          Series ID:
          <input
            type="number"
            value={seriesId}
            onChange={(e) => setSeriesId(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleGetDetails}>
          Get Details
        </button>
      </form>
      {seriesDetails && (
        <div>
          <h3>Series Details</h3>
          <p>Name: {seriesDetails.name}</p>
          <p>Description: {seriesDetails.description}</p>
          <p>Release Year: {seriesDetails.release_year}</p>
          <p>Rating: {seriesDetails.rating}</p>
          <p>Reviews: {seriesDetails.reviews}</p>
        </div>
      )}
      {seriesDetails && (
        <div>
          <h3>Modify Series Details</h3>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Release Year:
              <input
                type="number"
                value={releaseYear}
                onChange={(e) => setReleaseYear(e.target.value)}
              />
            </label>
            <label>
              Rating:
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </label>
            <label>
              Reviews:
              <input
                type="number"
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleUpdateSeries}>
              Update Series
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateSeriesForm;
