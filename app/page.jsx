export const metadata = {
  title: 'Sora 2, AI Sora, Sora 2 AI, Sora App, Sora Android, Sora invite code, Sora video - SoraAI3.com',
  description: 'Sora 2 latest video generation model is more physically accurate, realistic, and more controllable than prior systems. It also features synchronized dialogue and sound effects. Create with it in the new Sora app.',
  openGraph: {
    type: 'website',
    url: 'https://soraai3.com/',
    title: 'AI sora, sora 2 ai , sora app ,sora invite code , sora video',
    description: 'Sora 2 latest video generation model is more physically accurate, realistic, and more controllable than prior systems. It also features synchronized dialogue and sound effects. Create with it in the new Sora app.',
    images: ['https://soraai3.com/images/sora-2-preview.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI sora, sora 2 ai , sora app ,sora invite code , sora video',
    images: ['https://soraai3.com/images/sora-2-preview.jpg']
  }
};

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Sora 2</h1>
          <p className="hero-description">
            Sora 2 latest video generation model is more physically accurate, realistic, and more controllable than prior systems. It also features synchronized dialogue and sound effects. Create with it in the new Sora app.
          </p>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Sora AI Prompt</h2>
          <p style={{ textAlign: 'center', color: '#666', marginTop: 10 }}>Sora 2 AI Prompt Guide：Generate the best Sora AI video.</p>
          <div
            className="feature-grid"
            style={{
              marginTop: 20,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 8,
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  padding: 0,
                  background: 'transparent',
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '9 / 16',
                    overflow: 'hidden',
                    borderRadius: 8,
                    background: '#000',
                    border: '1px solid #2b2b2b',
                  }}
                >
                  <video
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className="feature-grid"
            style={{
              marginTop: 12,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 8,
            }}
          >
            {[4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  padding: 0,
                  background: 'transparent',
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '9 / 16',
                    overflow: 'hidden',
                    borderRadius: 8,
                    background: '#000',
                    border: '1px solid #2b2b2b',
                  }}
                >
                  <video
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
