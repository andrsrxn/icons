import type { FlagIcon } from './types'

export const IconFlagXK: FlagIcon = ({
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
  const titleText = title ?? 'XK'

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
        <linearGradient id='xk-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='xk-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2f5fbf' />
          <stop offset='100%' stopColor='#244ea3' />
        </linearGradient>
        <linearGradient id='xk-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e9c072' />
          <stop offset='100%' stopColor='#cfa557' />
        </linearGradient>
        <clipPath id='xk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#xk-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#xk-a)' d='M0 0h21v15H0z' />
          <path fill='url(#xk-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#xk-a)'
            d='m9 3.5-.707.207L8.5 3l-.207-.707L9 2.5l.707-.207L9.5 3l.207.707zm3 0-.707.207L11.5 3l-.207-.707L12 2.5l.707-.207L12.5 3l.207.707zm3 1-.707.207L14.5 4l-.207-.707L15 3.5l.707-.207L15.5 4l.207.707zm2 2-.707.207L16.5 6l-.207-.707L17 5.5l.707-.207L17.5 6l.207.707zm-13 0-.707.207L3.5 6l-.207-.707L4 5.5l.707-.207L4.5 6l.207.707zm2-2-.707.207L5.5 4l-.207-.707L6 3.5l.707-.207L6.5 4l.207.707z'
          />
          <path
            fill='url(#xk-c)'
            d='m9 10-1-.5-1-2h1l1-1 .5-1 1-.5.5.5 1 .5v.5l.5.5L14 8l-.5 1.5L12 11l-.5-1-1.5 1v1l-.5-.5z'
          />
        </g>
      </g>
    </svg>
  )
}
