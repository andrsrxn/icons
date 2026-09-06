import type { FlagIcon } from './types'

export const IconFlagSL: FlagIcon = ({
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
  const titleText = title ?? 'SL'

  const showTitle = !(isHidden || ariaLabel)

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-sl'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      aria-labelledby={showTitle ? 'sl-title' : undefined}
      focusable={isHidden ? false : undefined}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {showTitle ? <title id={'sl-title'}>{titleText}</title> : null}

      <defs>
        <defs>
          <linearGradient id='sl-a' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#fff' />
            <stop offset='100%' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='sl-b' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#35ce4f' />
            <stop offset='100%' stopColor='#2ab441' />
          </linearGradient>
          <linearGradient id='sl-c' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#1c87db' />
            <stop offset='100%' stopColor='#1175c4' />
          </linearGradient>
        </defs>
        <clipPath id='sl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sl-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sl-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sl-b)' d='M0 0h21v5H0z' />
          <path fill='url(#sl-c)' d='M0 10h21v5H0z' />
          <path fill='url(#sl-a)' d='M0 5h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}
