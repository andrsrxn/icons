import type { FlagIcon } from './types'

export const IconFlagBI: FlagIcon = ({
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
  const titleText = title ?? 'BI'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-bi'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='bi-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bi-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e4233b' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='bi-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#34cd4e' />
          <stop offset='100%' stopColor='#2ab441' />
        </linearGradient>
        <linearGradient id='bi-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#df2239' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <clipPath id='bi-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bi-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bi-a)' d='M0 0h21v15H0z' />
          <path fill='url(#bi-b)' d='M2.08 1.437h21v15h-21z' transform='translate(-2.08 -1.44)' />
          <path fill='url(#bi-c)' d='m2 1.437 9 7.5-9 7.5z' transform='translate(-2.08 -1.44)' />
          <path
            fill='url(#bi-c)'
            d='m14.08 1.437 9 7.5-9 7.5z'
            transform='matrix(-1 0 0 1 35.08 -1.44)'
          />
          <path
            fill='url(#bi-a)'
            d='M10.359 6.233 1.119 0 0 1.658 9.24 7.89a3.5 3.5 0 0 0 0 2.094L0 16.217l1.118 1.658 9.24-6.233a3.5 3.5 0 0 0 2.222.795c.844 0 1.617-.298 2.222-.795l9.24 6.233 1.118-1.658-9.24-6.233a3.5 3.5 0 0 0 0-2.094l9.24-6.232L24.042 0l-9.24 6.233a3.5 3.5 0 0 0-2.222-.796c-.843 0-1.617.299-2.221.796'
            transform='translate(-2.08 -1.44)'
          />
          <path
            fill='url(#bi-d)'
            d='m12.58 7.937-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707zm-1.5 2.5-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707zm3 0-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707z'
            transform='translate(-2.08 -1.44)'
          />
        </g>
      </g>
    </svg>
  )
}
