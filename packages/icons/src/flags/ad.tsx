import type { FlagIcon } from './types'

export const IconFlagAD: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AD',
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
      data-slot='icon-flag-ad'
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
            id='ad-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ad-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1537d1' />
            <stop offset='1' stopColor='#0522a5' />
          </linearGradient>
          <linearGradient
            id='ad-d'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ea3058' />
            <stop offset='1' stopColor='#ce173e' />
          </linearGradient>
          <linearGradient
            id='ad-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcf3c' />
            <stop offset='1' stopColor='#fecb2f' />
          </linearGradient>
          <clipPath id='ad-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ad-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ad-clip)'>
        <g clipPath='url(#ad-a)'>
          <path fill='url(#ad-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ad-c)' d='M21 0H0v15h21z' />
          <path fill='url(#ad-d)' d='M21 0H10v15h11z' />
          <path fill='url(#ad-e)' d='M14 0H7v15h7z' />
          <path fill='#ffedb1' fillRule='evenodd' d='M9.5 6.5h1V7h-1z' clipRule='evenodd' />
          <path
            fill='#d32e28'
            d='M9.67 7.96c.02.3.29.54.58.54h.5a.6.6 0 0 0 .59-.54l.12-1.46H9.54zM9.04 6.5A.45.45 0 0 1 9.5 6h2c.28 0 .48.22.46.5L11.83 8c-.04.55-.53 1-1.08 1h-.5a1.1 1.1 0 0 1-1.08-1z'
          />
          <path fill='#d32e28' fillRule='evenodd' d='M9.5 7h2v.5h-2z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
