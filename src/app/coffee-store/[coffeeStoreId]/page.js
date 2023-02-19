"use client";
import Link from "next/link";
import React from "react";

function CoffeeStore({ params }) {
  const id = params.coffeeStoreId;
  return (
    <div>
      Coffee Store {id}
      <Link href="/">Back to home</Link>
      <Link href="/coffee-store/dynamic">Go to page</Link>
    </div>
  );
}

export default CoffeeStore;
