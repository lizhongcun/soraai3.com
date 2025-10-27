export const metadata = {
  title: 'Sora iOS App - sora app | sora iOS download',
  description: 'Download Sora iOS app to experience the latest AI video generation technology. Get Sora app from App Store, supports Sora 2 model, create amazing AI video content.',
  openGraph: {
    type: 'website',
    url: 'https://soraai3.com/app',
    title: 'Sora iOS App - Download Sora App',
    description: 'Download Sora iOS app to experience the latest AI video generation technology. Get Sora app from App Store.',
    images: ['https://soraai3.com/images/sora-ios-app.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sora iOS App - Download Sora App',
    images: ['https://soraai3.com/images/sora-ios-app.jpg']
  }
};

export default function Page() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Sora iOS App</h1>
          <p>Experience the latest AI video generation technology on iPhone and iPad</p>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <h2>App Introduction</h2>
          <p>
            Sora iOS app is the official mobile application developed by OpenAI, allowing you to easily create AI-generated video content on iPhone and iPad.
            The app integrates the latest Sora 2 model, providing an intuitive user interface and powerful creation tools.
          </p>
          <h3>Main Features</h3>
          <ul>
            <li><strong>AI Video Generation</strong>: Generate high-quality videos using the Sora 2 model</li>
            <li><strong>Text to Video</strong>: Create videos through simple text descriptions</li>
            <li><strong>Audio Synchronization</strong>: Support automatic generation of dialogue and sound effects</li>
            <li><strong>Video Editing</strong>: Built-in basic editing features</li>
            <li><strong>Cloud Sync</strong>: Automatically save works to the cloud</li>
            <li><strong>Sharing Features</strong>: Easily share your creations</li>
          </ul>
          <h3>System Requirements</h3>
          <ul>
            <li>iOS 15.0 or higher</li>
            <li>iPhone 12 or newer models</li>
            <li>iPad Air 4 or newer models</li>
            <li>At least 4GB available storage space</li>
            <li>Stable internet connection</li>
          </ul>
          <h3>App Features</h3>
          <div style={{ margin: '30px 0' }}>
            <h4>🎨 Intuitive Creation Interface</h4>
            <p>Simple and easy-to-use interface design, letting you focus on creation itself</p>
            <h4>⚡ Fast Generation</h4>
            <p>Optimized algorithms ensure efficiency and quality of video generation</p>
            <h4>🔒 Privacy Protection</h4>
            <p>Strict data protection measures to ensure your creation security</p>
            <h4>📱 Mobile Optimized</h4>
            <p>User experience optimized specifically for mobile devices</p>
          </div>
          <h2>Download App</h2>
          <p>Click the button below to go to App Store and download Sora app</p>
          <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <a href="https://apps.apple.com/us/app/sora-by-openai/id6744034028" target="_blank" className="app-store-btn" rel="noreferrer">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: 60 }} />
            </a>
          </div>
          <h3>Installation Steps</h3>
          <ol>
            <li>Click the App Store button above</li>
            <li>Click "Get" or "Install" in the App Store</li>
            <li>Wait for download to complete</li>
            <li>Open the app and register an account</li>
            <li>Enter invite code (if required)</li>
            <li>Start creating your first AI video</li>
          </ol>
          <h3>Usage Tips</h3>
          <ul>
            <li>Use detailed and specific text descriptions for better results</li>
            <li>Try different styles and scene descriptions</li>
            <li>Use audio features to enhance video immersion</li>
            <li>Regularly save your works to the cloud</li>
            <li>Follow app updates to get new features</li>
          </ul>
          <div className="download-section">
            <h2>Need Invite Code?</h2>
            <p>Since Sora is currently in beta testing, you may need an invite code to use it</p>
            <a href="/invite-code" className="download-btn ios-btn">Get Invite Code</a>
          </div>
          <h3>Technical Support</h3>
          <p>If you encounter any issues during use, you can:</p>
          <ul>
            <li>Check the help documentation within the app</li>
            <li>Visit OpenAI official support page</li>
            <li>Contact our technical support team</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
