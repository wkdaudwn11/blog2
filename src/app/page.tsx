'use client';

import { useEffect } from 'react';

const Home = () => {
  const getPages = async () => {
    try {
      const res = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startCursor: undefined,
          pageSize: 50,
        }),
      });

      const test = await res.json();
      console.log(test);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPages();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Blog
    </main>
  );
};

export default Home;
