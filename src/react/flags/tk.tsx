import type { FlagIcon } from './types'

export const IconFlagTK: FlagIcon = ({
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
  const titleText = title ?? 'TK'

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
        <linearGradient id='tk-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tk-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0637c5' />
          <stop offset='100%' stopColor='#002caa' />
        </linearGradient>
        <linearGradient id='tk-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fdd33f' />
          <stop offset='100%' stopColor='#fed02f' />
        </linearGradient>
        <clipPath id='tk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tk-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tk-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tk-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#tk-c)'
            d='M4 12h15v1H3zm7.5-6c3-2 6.5-4 6.5-4s-1.643 3.073-1.5 4.5C16.69 8.407 19 11 19 11H5s3.5-3 6.5-5'
          />
          <path
            fill='#fff'
            d='m4 9-.707.207L3.5 8.5l-.207-.707L4 8l.707-.207L4.5 8.5l.207.707zM5 2.5l-.707.207L4.5 2l-.207-.707L5 1.5l.707-.207L5.5 2l.207.707zM7 5.5l-.707.207L6.5 5l-.207-.707L7 4.5l.707-.207L7.5 5l.207.707zM2 5.5l-.707.207L1.5 5l-.207-.707L2 4.5l.707-.207L2.5 5l.207.707z'
          />
        </g>
      </g>
    </svg>
  )
}
