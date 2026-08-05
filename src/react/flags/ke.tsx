import type { FlagIcon } from './types'

export const IconFlagKE: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'KE'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ke-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ke-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='ke-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#018301' />
          <stop offset='100%' stopColor='#006700' />
        </linearGradient>
        <linearGradient id='ke-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#dc0808' />
          <stop offset='100%' stopColor='#bc0000' />
        </linearGradient>
        <path id='ke-e' d='M2.5 10.5c1 0 2.5-1.962 2.5-5S3.5.5 2.5.5 0 2.462 0 5.5s1.5 5 2.5 5' />
        <clipPath id='ke-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ke-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ke-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ke-b)' d='M0 0h21v4H0z' />
          <path fill='url(#ke-c)' d='M0 11h21v4H0z' />
          <path fill='url(#ke-a)' d='M0 4h21v7H0z' />
          <path fill='url(#ke-d)' d='M0 5h21v5H0z' />
          <g transform='translate(8 2)'>
            <mask id='ke-f' fill='#fff'>
              <use xlinkHref='#ke-e' />
            </mask>
            <use xlinkHref='#ke-e' fill='#bc0000' />
            <ellipse cx='-1.5' cy='5.5' fill='url(#ke-b)' mask='url(#ke-f)' rx='2.5' ry='5.5' />
            <ellipse cx='6.5' cy='5.5' fill='url(#ke-b)' mask='url(#ke-f)' rx='2.5' ry='5.5' />
            <path
              fill='url(#ke-a)'
              d='M2.5 7C2.224 7 2 6.328 2 5.5S2.224 4 2.5 4s.5.672.5 1.5S2.776 7 2.5 7m0-3C2.224 4 2 3.105 2 2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2m0 7c-.276 0-.5-.895-.5-2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2'
              mask='url(#ke-f)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
