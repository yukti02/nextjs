import { useEffect, useState } from 'react';
import { getSeries } from 'D:/TDC/nextjs/movie_app/src/pages/api/api.ts';

const GetSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeries()
      .then((data) => setSeries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '24px' }}>
            <h1 style={{ fontSize: '32px' }}>Series List :</h1>
            <ul>
                {series.map((s: any) => (
                    <li key={s.id} style={{ marginBottom: '16px' }}>
                        {s.name} - {s.description} - {s.release_year} - {s.rating} - {s.reviews}
                    </li>
                ))}
            </ul>
        </div>
  );
};

export default GetSeries;
