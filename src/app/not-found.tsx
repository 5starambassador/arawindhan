import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#B45309' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
        Page Not Found / பக்கம் காணப்படவில்லை
      </h2>
      <p style={{ color: '#64748B', maxWidth: '480px', marginBottom: '2rem', lineHeight: 1.6 }}>
        The page you are looking for does not exist or has been moved.
        <br />
        நீங்கள் தேடும் பக்கம் கிடைக்கவில்லை அல்லது நகர்த்தப்பட்டுள்ளது.
      </p>
      <Link
        href="/en"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #D97706, #B45309)',
          color: '#ffffff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 700,
        }}
      >
        Return to Home / முகப்புக்குச் செல்க
      </Link>
    </div>
  );
}
