import React, { useState, useEffect } from 'react';
import { getSeriesById } from 'D:/TDC/nextjs/movie_app/src/pages/api/api.ts';

interface SeriesDetails {
    name: string;
    description: string;
    release_year: number;
    rating: number;
    reviews: number;
}

const SeriesDetailsForm = () => {
    const [seriesId, setSeriesId] = useState('');
    const [seriesDetails, setSeriesDetails] = useState<SeriesDetails | null>(null);

    const handleGetDetails = async () => {
        try {
            const id = parseInt(seriesId);
            const seriesData = await getSeriesById(id);
            setSeriesDetails(seriesData);
        } catch (error) {
            console.error('Error fetching series details:', error);
        }
    };

    useEffect(() => {
        setSeriesDetails(null);
    }, [seriesId]);

    return (
        <div>
            <h2>Get Series Details</h2>
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
        </div>
    );
};

export default SeriesDetailsForm;
