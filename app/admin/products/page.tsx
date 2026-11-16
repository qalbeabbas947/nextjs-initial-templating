import { Suspense } from "react";
import Link from "next/link";

type SearchParams = Promise<{
  category?: string;
  sort?: string;
}>;

const Products = [
  { id: 1, name: "React Course", category: "react" },
  { id: 2, name: "Angular Course", category: "react" },
  { id: 3, name: "C++ Course", category: "backend" },
  { id: 4, name: "Java Course", category: "backend" },
  { id: 5, name: "VB Course", category: "backend" },
  { id: 6, name: "Nextjs Course", category: "react" },
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div>
      <main>
        <h1>This is admin list.</h1>
        <Suspense fallback={<p>Loading products...</p>}>
          <ProductsList searchParams={searchParams} />
        </Suspense>
      </main>
    </div>
  );
}

async function ProductsList({ searchParams }: { searchParams: SearchParams }) {
  const { category, sort } = await searchParams;

  const items = category
    ? Products.filter((p) => p.category === category)
    : [...Products];

  if (sort === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <ul>
      {items.map((p) => (
        <li key={p.id}>
          {p.name} ({p.category})
        </li>
      ))}
    </ul>
  );
}