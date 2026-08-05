import type { FlagIcon } from './types'

export const IconFlagMN: FlagIcon = ({
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
  const titleText = title ?? 'MN'

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
        <linearGradient id='mn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#146bbc' />
          <stop offset='100%' stopColor='#0b5396' />
        </linearGradient>
        <linearGradient id='mn-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e43642' />
          <stop offset='100%' stopColor='#c32a34' />
        </linearGradient>
        <linearGradient id='mn-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f8d246' />
          <stop offset='100%' stopColor='#f9ce2f' />
        </linearGradient>
        <clipPath id='mn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mn-b)' d='M7 0h7v15H7z' />
          <path fill='url(#mn-c)' d='M0 0h7v15H0z' />
          <path fill='url(#mn-c)' d='M14 0h7v15h-7z' />
          <path
            fill='url(#mn-d)'
            d='M4 9h1v3H4zM2 9h1v3H2zm1 2h1l-.5 1zm0-2h1l-.5 1zm0-1 .5-.5.5.5zm.5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
