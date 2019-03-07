import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Category from '../../components/category';
import Product from '../../components/allProduct';

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <Product />
      <Footer />
    </div>
  );
}
