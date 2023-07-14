import styles from "@/app/page.module.css";

async function getData() {
  const res = await fetch("https://dummyjson.com/quotes/1");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 className={styles.page_title}>Hello world</h1>
        <p>{data.quote}</p>
      </div>
    </main>
  );
}
