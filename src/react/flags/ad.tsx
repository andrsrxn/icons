import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagAD: FlagIcon = ({
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
      <title>AD</title>

      <defs>
        <linearGradient id='ad-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ad-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1537d1' />
          <stop offset='100%' stopColor='#0522a5' />
        </linearGradient>
        <linearGradient id='ad-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ea3058' />
          <stop offset='100%' stopColor='#ce173e' />
        </linearGradient>
        <linearGradient id='ad-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffcf3c' />
          <stop offset='100%' stopColor='#fecb2f' />
        </linearGradient>
        <clipPath id='ad-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ad-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ad-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ad-b)' d='M0 0h21v15H0z' />
          <path fill='url(#ad-c)' d='M10 0h11v15H10z' />
          <path fill='url(#ad-d)' d='M7 0h7v15H7z' />
          <path fill='#ffedb1' d='M9.5 6.5h1V7h-1z' />
          <path
            fill='#d32e28'
            fillRule='nonzero'
            d='M9.665 7.96c.025.295.292.54.587.54h.496a.61.61 0 0 0 .587-.54l.122-1.46H9.543zm-.624-1.465A.446.446 0 0 1 9.495 6h2.01c.273 0 .477.216.454.495l-.126 1.506c-.046.552-.53.999-1.085.999h-.496c-.553 0-1.039-.443-1.085-.999z'
          />
          <path fill='#d32e28' d='M9.5 7h2v.5h-2z' />
        </g>
      </g>
    </svg>
  )
}
