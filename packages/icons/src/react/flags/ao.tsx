import type { FlagIcon } from './types'

export const IconFlagAO: FlagIcon = ({
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
  const titleText = title ?? 'AO'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-ao'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ao-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ao-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff323e' />
          <stop offset='100%' stopColor='#fd0d1b' />
        </linearGradient>
        <linearGradient id='ao-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='ao-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#dd2137' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='ao-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f8d84b' />
          <stop offset='100%' stopColor='#f9d536' />
        </linearGradient>
        <clipPath id='ao-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ao-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ao-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ao-b)' d='M0 0h21v15H0z' />
          <path fill='url(#ao-c)' d='M0 8h21v7H0z' />
          <path fill='url(#ao-d)' d='M0 0h21v8H0z' />
          <path
            fill='url(#ao-e)'
            fillRule='nonzero'
            d='m10.63 8.855-1.407-.939a.5.5 0 0 1 .554-.832l1.536 1.024q.102-.194.161-.414a2 2 0 0 0-1.414-2.45.5.5 0 1 1 .259-.965 3 3 0 0 1 1.83 4.386l.628.419a.5.5 0 0 1-.554.832l-.713-.475c-.727.631-1.744.901-2.744.633a.5.5 0 0 1 .259-.966c.57.153 1.147.044 1.606-.253M9.5 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
