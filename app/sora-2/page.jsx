export const metadata = {
  title: 'Sora 2 - Latest AI Video Generation Model | sora 2 ai',
  description: 'Sora 2 is the latest AI video generation model with higher physical accuracy, realism, and controllability. Supports synchronized dialogue and sound effects generation in the Sora app.',
  openGraph: {
    type: 'website',
    url: 'https://soraai3.com/sora-2',
    title: 'Sora 2 - Latest AI Video Generation Model',
    description: 'Sora 2 is the latest AI video generation model with higher physical accuracy, realism, and controllability. Supports synchronized dialogue and sound effects generation.',
    images: ['https://soraai3.com/images/sora-2-detail.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sora 2 - Latest AI Video Generation Model',
    images: ['https://soraai3.com/images/sora-2-detail.jpg']
  }
};

export default function Page() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Sora 2</h1>
          <p>The latest AI video generation model, bringing unprecedented realism and control</p>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <h2>What is Sora 2?</h2>
          <p>
            Sora 2 is the latest AI video generation model developed by OpenAI, representing a major breakthrough in AI video creation.
            Compared to previous versions, Sora 2 has significantly improved in physical accuracy, realism, and controllability.
          </p>
          <h3>Core Features</h3>
          <ul>
            <li><strong>Physical Accuracy</strong>: More precise physics simulation, making generated videos more consistent with real-world physics</li>
            <li><strong>Enhanced Realism</strong>: Improved rendering technology producing more realistic visual effects</li>
            <li><strong>Better Control</strong>: Provides more precise control options, allowing users to better realize their creative ideas</li>
            <li><strong>Synchronized Audio</strong>: Supports synchronized generation of dialogue and sound effects, creating a more complete audiovisual experience</li>
          </ul>
          <h3>Technical Advantages</h3>
          <p>
            Sora 2 uses advanced deep learning technology that can understand complex scene descriptions and generate high-quality video content.
            The model is optimized through extensive training data and can handle various complex visual and audio elements.
          </p>
          <h3>Application Scenarios</h3>
          <ul>
            <li>Creative video production</li>
            <li>Educational content development</li>
            <li>Marketing video creation</li>
            <li>Entertainment content creation</li>
            <li>Prototype demonstrations</li>
          </ul>
          <h3>How to Use Sora 2</h3>
          <p>
            You can experience the powerful features of Sora 2 through the Sora app. The app provides an intuitive interface,
            allowing you to easily create and edit AI-generated video content.
          </p>
          <div className="download-section">
            <h2>Experience Sora 2 Now</h2>
            <div className="download-buttons">
              <a href="/app" className="download-btn ios-btn">
                <span className="btn-icon">📱</span>
                Download iOS
              </a>
              <a href="/android" className="download-btn android-btn">
                <span className="btn-icon">🤖</span>
                Download Android
              </a>
            </div>
          </div>
          <h3>Get Invite Code</h3>
          <p>
            Since Sora 2 is currently in beta testing, you may need an invite code to use it.
            Visit our invite code page to get the latest invite code information.
          </p>
          <a href="/invite-code" className="download-btn ios-btn" style={{ marginTop: 20 }}>
            Get Invite Code
          </a>
        </div>
      </section>
    </main>
  );
}
