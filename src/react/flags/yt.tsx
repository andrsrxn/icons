import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagYT: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>YT</title>

      <defs>
        <linearGradient id='yt-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='yt-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1b2ca9' />
          <stop offset='100%' stopColor='#132294' />
        </linearGradient>
        <linearGradient id='yt-i' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e6402c' />
          <stop offset='100%' stopColor='#d1321f' />
        </linearGradient>
        <linearGradient id='yt-j' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#d0d0d0' />
          <stop offset='100%' stopColor='#c4c4c4' />
        </linearGradient>
        <linearGradient id='yt-k' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='yt-l' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f7e04b' />
          <stop offset='100%' stopColor='#ead135' />
        </linearGradient>
        <path
          id='yt-b'
          d='M0 .491A.49.49 0 0 1 .498 0h4.004A.5.5 0 0 1 5 .491v5.018a.535.535 0 0 1-.5.522S3 6 2.5 6.94C2 6 .5 6.03.5 6.03a.54.54 0 0 1-.5-.522z'
        />
        <path id='yt-e' d='M0 0h5v3H0z' />
        <path id='yt-h' d='M0 3h5v4H0z' />
        <filter
          id='yt-d'
          width='130%'
          height='150%'
          x='-15%'
          y='-25%'
          filterUnits='objectBoundingBox'>
          <feMorphology
            in='SourceAlpha'
            operator='dilate'
            radius='.25'
            result='shadowSpreadOuter1'
          />
          <feOffset in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <filter
          id='yt-g'
          width='130%'
          height='137.5%'
          x='-15%'
          y='-18.8%'
          filterUnits='objectBoundingBox'>
          <feMorphology
            in='SourceAlpha'
            operator='dilate'
            radius='.25'
            result='shadowSpreadOuter1'
          />
          <feOffset in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <clipPath id='yt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#yt-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#yt-a)' d='M0 0h21v15H0z' />
          <g transform='translate(8 4)'>
            <mask id='yt-c' fill='#fff'>
              <use xlinkHref='#yt-b' />
            </mask>
            <use xlinkHref='#yt-b' fill='#d8d8d8' />
            <path
              stroke='#979797'
              d='M4.5.5V.491zm0 0h.002zm-4 0v5.009s.02.022-.01.022H.5c.342-.004.793.048 1.25.213.285.102.538.24.75.418.212-.178.465-.316.75-.418.444-.16.882-.214 1.22-.213.02-.005.03-.017.03-.022V.5z'
            />
            <g mask='url(#yt-c)'>
              <use xlinkHref='#yt-e' fill='#000' filter='url(#yt-d)' />
              <use xlinkHref='#yt-e' fill='url(#yt-f)' />
            </g>
            <g mask='url(#yt-c)'>
              <use xlinkHref='#yt-h' fill='#000' filter='url(#yt-g)' />
              <use xlinkHref='#yt-h' fill='url(#yt-i)' />
            </g>
          </g>
          <g transform='translate(14 3)'>
            <path
              fill='url(#yt-j)'
              d='M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1s.453.418.496.85c.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674-.401 1.276.105 1.775c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083S.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921'
            />
            <circle cx='1.75' cy='1.75' r='1' fill='url(#yt-k)' fillOpacity='.3' />
          </g>
          <g transform='matrix(-1 0 0 1 7 3)'>
            <path
              fill='url(#yt-j)'
              d='M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1s.453.418.496.85c.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674-.401 1.276.105 1.775c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083S.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921'
            />
            <circle cx='1.75' cy='1.75' r='1' fill='url(#yt-k)' fillOpacity='.3' />
          </g>
          <path fill='url(#yt-a)' d='M9.634 5a1 1 0 1 0 1.732 0 1 1 0 0 1-1.732 0' />
          <path
            fill='url(#yt-l)'
            d='M9.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
