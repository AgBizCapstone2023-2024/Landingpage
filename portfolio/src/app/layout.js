export default function Layout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
              <a href="https://www.agbizlogic.com/index/#bottom">Contact us</a>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
