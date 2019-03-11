import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Category from '../../components/category';
import CartPage from '../../components/cartComponent';

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <CartPage />
      <Footer />
    </div>
  );
}
