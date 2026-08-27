import type { FlagIcon } from './types'

export const IconFlagCN: FlagIcon = ({
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
  const titleText = title ?? 'CN'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-cn'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='cn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f1361d' />
          <stop offset='100%' stopColor='#df2910' />
        </linearGradient>
        <linearGradient id='cn-c' x1='37.059%' x2='62.941%' y1='1.704%' y2='98.296%'>
          <stop offset='0%' stopColor='#ffdc42' />
          <stop offset='100%' stopColor='#fdd217' />
        </linearGradient>
        <linearGradient id='cn-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffdc42' />
          <stop offset='100%' stopColor='#fdd217' />
        </linearGradient>
        <clipPath id='cn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cn-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#cn-c)'
            d='m10.13 4.483-.63.383.017-.737-.383-.629.737.017.629-.383-.017.737.383.629zM8.28 2.449l-.726-.123.497-.545.123-.727.545.497.727.123-.497.545-.123.727zm.366 6.53-.615.404-.01-.737-.404-.615.737-.01.615-.404.01.737.404.615zm1.267-1.987-.732.082.327-.66-.082-.733.66.327.733-.082-.327.66.082.733z'
          />
          <path
            fill='url(#cn-d)'
            d='M5 6.17 3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z'
          />
        </g>
      </g>
    </svg>
  )
}
