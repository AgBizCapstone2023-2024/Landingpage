// app/page.js
import Layout from "./layout";
export default function Page() {
  return (
    <Layout>
      <div class="centered-heading">
       <h1 className="text-3xl font-bold mb-4">Establishing fair tenant/farmer agreements one property at a time.</h1>
       <h2 className="text-xl mb-4">Designed to help agricultural producers establish equitable short- and long-run crop leases.</h2>
       </div>

       <div class="landing-page-picture">
       </div>
      <label className="block text-lg font-medium mb-2">AgBizLease: What and Why</label>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">The problem being addressed by your project/product is clearly stated and relevant for your audience. You can frame this as a question to hook your audience, e.g., "Have you ever struggled with X?" or a statement, or even better, a relevant case study to illustrate.</li>
        <li>VP 1: Prior to AgBiz Lease, farmers and tenants lacked access to an online tool for negotiating lease agreements based on financial data. We're grateful to have addressed this gap.</li>
        <li>The value proposition (VP) of your project/product is clearly stated and meaningful for your audience. Don't have a "value proposition" section in the page. Instead, have something like "Why X?" or "How is X different?", or simply list key VPs with a description. It should be self-explanatory.</li>
      </ul>
      <div className="space-x-4">
        <a href="https://www.agbizlogic.com/about/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Find out more</button>
        </a>
        <a href="https://www.agbizlogic.com/index/">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Get started</button>
        </a>
      </div>
    </Layout>
  );
}
