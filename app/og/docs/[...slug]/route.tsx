import { getPageImageUrl, source } from '@/lib/source';
import { appName } from '@/lib/shared';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0b0d12',
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(91, 141, 239, 0.35), transparent 60%)',
          color: '#f4f5f8',
          padding: '64px',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: 28,
            fontWeight: 600,
            color: '#8eb4ff',
          }}
        >
          {appName}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: 1000,
            }}
          >
            {page.data.title}
          </div>
          {page.data.description ? (
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: 'rgba(244, 245, 248, 0.72)',
                maxWidth: 900,
              }}
            >
              {page.data.description}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImageUrl(page).segments,
  }));
}
