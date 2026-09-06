import type { FlagIcon } from './types'

export const IconFlagLI: FlagIcon = ({
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
  const titleText = title ?? 'LI'

  const showTitle = !(isHidden || ariaLabel)

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-li'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      aria-labelledby={showTitle ? 'li-title' : undefined}
      focusable={isHidden ? false : undefined}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {showTitle ? <title id={'li-title'}>{titleText}</title> : null}

      <defs>
        <defs>
          <linearGradient id='li-a' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#fff' />
            <stop offset='100%' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='li-b' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#0a3b97' />
            <stop offset='100%' stopColor='#042e7d' />
          </linearGradient>
          <linearGradient id='li-c' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#e6273e' />
            <stop offset='100%' stopColor='#cc162c' />
          </linearGradient>
        </defs>
        <clipPath id='li-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#li-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#li-a)' d='M0 0h21v15H0z' />
          <path fill='url(#li-b)' d='M0 0h21v8H0z' />
          <path fill='url(#li-c)' d='M0 8h21v7H0z' />
        </g>
      </g>
    </svg>
  )
}
