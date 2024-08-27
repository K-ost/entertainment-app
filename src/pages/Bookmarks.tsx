import Layout from "../components/Layout";

function Bookmarks() {
  return (
    <Layout>
      <h1>Bookmarks</h1>
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {<p>Your bookmark list is empty.</p>}
      </div>
    </Layout>
  );
}

export default Bookmarks;
