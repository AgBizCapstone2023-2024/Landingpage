import './globals.css';
export default function Layout({ children }) {
  return (
   <html lang="en">
      <head>
        <title>Agbiz Lease</title>
      </head>
       <body className="font-sans bg-gray-300 text-black">
        <nav className="bg-gradient-to-r from-black to-gray-600 shadow">
          <ul className="flex justify-between p-4">
            <li className="flex space-x-4">
              <a href="/" className="text-blue-500 hover:text-blue-700">Home</a>
              <a href="https://www.agbizlogic.com/index/#bottom" className="text-blue-500 hover:text-blue-700">Contact us</a>
            </li>
          </ul>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
