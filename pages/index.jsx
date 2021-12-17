import React from 'react';
import Link from 'next/link';

export default () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>Link to Notes</a>
    </Link>
  </div>
);
