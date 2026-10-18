import type { FlagIcon } from './types'

export const IconFlagKI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KI',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-ki'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='ki-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ki-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e62b3f' />
            <stop offset='1' stopColor='#ca1a2c' />
          </linearGradient>
          <linearGradient
            id='ki-d'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffda57' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient
            id='ki-e'
            x1='10.5'
            x2='10.5'
            y1='3.14'
            y2='13.86'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffda57' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient
            id='ki-f'
            x1='11.06'
            x2='11.06'
            y1='1'
            y2='3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffda57' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient
            id='ki-g'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0752a2' />
            <stop offset='1' stopColor='#034285' />
          </linearGradient>
          <clipPath id='ki-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ki-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ki-clip)'>
        <g clipPath='url(#ki-a)'>
          <path fill='url(#ki-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ki-c)' d='M21 0H0v8h21z' />
          <path fill='url(#ki-d)' d='M10.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          <path
            fill='url(#ki-e)'
            fillRule='evenodd'
            d='m10.5 12.04-1.22 1.82-.31-2.18-1.9 1.12.67-2.1-2.2.19 1.51-1.6L5 8.5l2.05-.79-1.5-1.6 2.19.19-.67-2.1 1.9 1.11.3-2.17 1.23 1.82 1.22-1.82.31 2.17 1.9-1.11-.67 2.1 2.2-.19-1.51 1.6L16 8.5l-2.05.79 1.5 1.6-2.19-.19.67 2.1-1.9-1.12-.3 2.18zm0-.04a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7'
            clipRule='evenodd'
          />
          <path
            fill='url(#ki-f)'
            fillRule='evenodd'
            d='m8.86 2.4-.05-.23L9.8 2s-1.32-.32-1.76-.47c-.62-.23-.54-.4-.54-.4s1.79.35 2.67.35c.19 0 .56.47.56.47s.65-.66.96-.68c1.4-.1 2.92-.28 2.92-.28s-.44.3-.7.37c-.71.22-2.22.52-2.22.52l-.21.33h1.5l-.64.18.33.3s-.34-.17-.8-.09c-.3.06-.67.27-1 .35-.82.21-1.3-.56-1.3-.56z'
            clipRule='evenodd'
          />
          <path fill='url(#ki-g)' d='M21 8H0v7h21z' />
          <path
            fill='#fff'
            d='m23.32 12.93.48.16-.32.95-.47-.16-.47-.15-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.12-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.12-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.12-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7-.47.15-.32-.94.47-.16 2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69zm0-2.5.48.16-.32.95-.47-.16-.47-.15-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.12-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.12-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.12-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7-.47.15-.32-.94.47-.16 2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69zm0-2.5.48.16-.32.95-.47-.16-.47-.15-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.11-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.11-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7c-.36.12-.9.11-1.25 0l-2.07-.7a1.3 1.3 0 0 0-.62 0l-2.06.7-.47.15-.32-.94.47-.16 2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69c.16.05.47.05.62 0l2.07-.69c.35-.12.9-.12 1.25 0l2.06.69z'
          />
        </g>
      </g>
    </svg>
  )
}
