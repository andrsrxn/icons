import type { FlagIcon } from './types'

export const IconFlagJM: FlagIcon = ({
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
  const titleText = title ?? 'JM'

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
        <linearGradient id='jm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='jm-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1dbe4f' />
          <stop offset='100%' stopColor='#159b3f' />
        </linearGradient>
        <linearGradient id='jm-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='jm-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd646' />
          <stop offset='100%' stopColor='#fed02f' />
        </linearGradient>
        <clipPath id='jm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#jm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#jm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#jm-b)' d='M0-.003h21v15H0z' />
          <path fill='url(#jm-c)' d='m0-.003 9 7.5-9 7.5z' />
          <path fill='url(#jm-c)' d='m12-.003 9 7.5-9 7.5z' transform='matrix(-1 0 0 1 33 0)' />
          <path
            fill='url(#jm-d)'
            d='M10.5 6.291-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44z'
          />
        </g>
      </g>
    </svg>
  )
}
