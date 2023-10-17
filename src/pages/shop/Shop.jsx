import React from "react";
import Hero from "../../components/hero/Hero";
import Popular from "../../components/popular/Popular";
import Offers from "../../components/offers/Offers";
import NewCollections from "../../components/newCollections/NewCollections";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Layout from "../../components/layout/Layout";

function Shop() {
  return (
    <Layout>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </Layout>
  );
}

export default Shop;
