const API_BASE_URL = 'http://localhost:5432';

export const getSeries = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/series`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch series data');
  }
};

interface SeriesData {
  name: string;
  description: string;
  release_year: number;
  rating: number;
  reviews: number;
}
export const createSeries = async (seriesData: SeriesData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/series`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(seriesData),
    });

    if (!response.ok) {
      throw new Error('Failed to create series');
    }
    const data = await response.json();
    return data.series;
  } catch (error) {
    throw new Error('Failed to create series');
  }
};

export const deleteSeries = async (seriesId: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/series/${seriesId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete series');
    }
    return 'Series deleted successfully';
  } catch (error) {
    throw new Error('Failed to delete series');
  }
};

export const getSeriesById = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/series/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch series by ID');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch series by ID');
  }
};

export const updateSeries = async (seriesId: number, updatedSeriesData: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/series/${seriesId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSeriesData),
    });

    if (!response.ok) {
      throw new Error('Failed to update series');
    }

    const data = await response.json();
    return data.series; // Assuming your API returns the updated series data
  } catch (error) {
    throw new Error('Failed to update series');
  }
};




