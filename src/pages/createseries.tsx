import { useState } from 'react';
import { createSeries } from 'D:/TDC/nextjs/movie_app/src/pages/api/api.ts';

interface SeriesFormData {
    name: string;
    description: string;
    release_year: number;
    rating: number;
    reviews: number;
}
const CreateSeries = () => {
    const [formData, setFormData] = useState<SeriesFormData>({
        name: '',
        description: '',
        release_year: 0,
        rating: 0,
        reviews: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formDataWithNumber = {
                ...formData,
                release_year: Number(formData.release_year),
                rating: Number(formData.rating),
                reviews: Number(formData.reviews)
            };

            const response = await createSeries(formDataWithNumber);
            console.log('Series created:', response);
        } catch (error) {
            console.error('Error creating series:', error);
        }
    };

    return (
        <div>
            <h1>Create Series</h1><br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div><br />
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div><br />
                    <label>Release Year:</label>
                    <input
                        type="number"
                        name="release_year"
                        value={formData.release_year}
                        onChange={handleChange}
                    />
                </div>
                <div><br />
                    <label>Rating:</label>
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                    />
                </div>
                <div><br />
                    <label>Reviews:</label>
                    <input
                        type="number"
                        name="reviews"
                        value={formData.reviews}
                        onChange={handleChange}
                    />
                </div><br></br>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateSeries;
