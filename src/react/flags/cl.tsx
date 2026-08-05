import type { FlagIcon } from './types'

export const IconFlagCL: FlagIcon = ({
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
  const titleText = title ?? 'CL'

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
        <linearGradient id='cl-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cl-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ea3b2e' />
          <stop offset='100%' stopColor='#d52b1e' />
        </linearGradient>
        <linearGradient id='cl-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0b48c2' />
          <stop offset='100%' stopColor='#0239a7' />
        </linearGradient>
        <clipPath id='cl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cl-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cl-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cl-b)' d='M0 7h21v8H0z' />
          <path fill='url(#cl-a)' d='M0 0h21v7H0z' />
          <path fill='url(#cl-c)' d='M0 0h7v7H0z' />
          <path
            fill='url(#cl-a)'
            d='m3.5 4.28-1.176.838.434-1.377-1.16-.859 1.444-.013L3.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377z'
          />
        </g>
      </g>
    </svg>
  )
}
