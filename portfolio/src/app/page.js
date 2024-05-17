// app/page.js
import Layout from "./layout";
export default function Page() {
  return (
    <Layout>
      <h1>Agbiz Lease</h1>
      <h2>Designed to help agricultural producers establish equitable short- and long-run crop leases.</h2>
      <label>To-dos</label>
      <ul>
        <li>The problem being addressed by your project/product is clearly stated and relevant for your audience
        You can frame this as a question to hook your audience, e.g., "Have you ever struggled with X?" or a statement, or even better, a relevant case study to illustrate</li>
        <li>The value proposition (VP) of your project/product is clearly stated and meaningful for your audience
        Don't have a "value proposition" section in the page. Instead, have something like "Why X?" or "How is X different?", or simply list key VPs with a description. It should be self-explanatory.</li>
      </ul>
      <a href="https://www.agbizlogic.com/about/">
        <button >Find out more</button>
      </a>
      <a href="https://www.agbizlogic.com/index/">
        <button >Get started</button>
      </a>
    </Layout>
  );
}
