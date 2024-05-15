export default function Layout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
        Now that you have the basic idea, you can make your next two pages on
        your own! Step 3: Navigation Step 4: Styling with Tailwind CSS Step 5:
        Testing Your Site
        <main>{children}</main>
      </body>
    </html>
  );
}
