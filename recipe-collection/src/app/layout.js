import './globals.css';

export const metadata = {
  title: 'Recipe Collection App',
  description: 'A simple Next.js application for recipe collection',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-green-600 text-white p-4 shadow-md">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold">Recipe Collection</h1>
          </div>
        </header>
        
        <main>{children}</main>
        
        <footer className="bg-gray-100 p-4 mt-8 border-t">
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <p>© 2025 Recipe Collection - Built with Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}