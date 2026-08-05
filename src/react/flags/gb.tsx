import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGB: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>GB</title>

      <defs>
        <linearGradient id='gb-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gb-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0a17a7' />
          <stop offset='100%' stopColor='#030e88' />
        </linearGradient>
        <linearGradient id='gb-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e6273e' />
          <stop offset='100%' stopColor='#cf152b' />
        </linearGradient>
        <clipPath id='gb-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gb-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gb-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gb-b)' d='M-.002 0h21v15h-21z' />
          <path
            fill='url(#gb-a)'
            d='M5.003 10H-.002V5h5.005L-2.082.22l1.118-1.657 8.962 6.045V-1h5v5.608l8.962-6.045L23.078.22 15.993 5h5.005v5h-5.005l7.085 4.78-1.118 1.657-8.962-6.045V16h-5v-5.608l-8.962 6.045-1.118-1.658z'
          />
          <path
            fill='#db1f35'
            fillRule='nonzero'
            d='m14.136 4.958 9.5-6.25a.25.25 0 0 0-.275-.417l-9.5 6.25a.25.25 0 1 0 .275.417M14.868 10.48l8.515 5.74a.25.25 0 1 0 .28-.415l-8.516-5.74a.25.25 0 0 0-.279.415M6.142 4.526-2.74-1.461a.25.25 0 0 0-.28.415L5.863 4.94a.25.25 0 0 0 .279-.414M6.827 9.995l-9.845 6.53a.25.25 0 1 0 .276.416l9.846-6.529a.25.25 0 0 0-.277-.417'
          />
          <path fill='url(#gb-c)' d='M-.002 9h9v6h3V9h9V6h-9V0h-3v6h-9z' />
        </g>
      </g>
    </svg>
  )
}
