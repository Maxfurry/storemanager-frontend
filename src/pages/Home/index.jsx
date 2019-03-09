import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Category from '../../components/category';
import FetchProduct from '../../components/allProduct';

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <FetchProduct />
      <Footer />
    </div>
  );
}
