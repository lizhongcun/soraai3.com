import './globals.css';

export const metadata = {
  title: {
    default: 'SoraAI3.com',
    template: '%s - SoraAI3.com'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <div className="nav-container">
              <a href="/" className="logo">Sora AI</a>
              <ul className="nav-menu">
                <li><a href="/sora-2">Sora 2</a></li>
                <li><a href="/invite-code">Invite Code</a></li>
                <li><a href="/app">iOS</a></li>
                <li><a href="/android">Android</a></li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
        <footer>
          <div className="container">
            <p>&copy; 2024 Sora AI. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
