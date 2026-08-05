import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagAS: FlagIcon = ({
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
      <title>AS</title>

      <defs>
        <linearGradient id='as-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='as-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#071585' />
          <stop offset='100%' stopColor='#000b64' />
        </linearGradient>
        <linearGradient id='as-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#d32636' />
          <stop offset='100%' stopColor='#ba1827' />
        </linearGradient>
        <linearGradient id='as-d' x1='50%' x2='35.4%' y1='0%' y2='89.131%'>
          <stop offset='0%' stopColor='#ab5423' />
          <stop offset='100%' stopColor='#5a3719' />
        </linearGradient>
        <clipPath id='as-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#as-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#as-a)' d='M0 0h21v15H0z' />
          <path fill='url(#as-b)' d='M0 0h21v15H0z' />
          <path fill='url(#as-c)' fillRule='nonzero' d='m22 15.5-22-8 22-8z' />
          <path fill='url(#as-a)' fillRule='nonzero' d='M21 .928 2.926 7.5 21 14.072z' />
          <path
            fill='url(#as-d)'
            d='M16 7.038c-.118-.118-.806.156-.806.156L14 6s-.062-.663.5-1c.425-.255 1.22-.16 1.999-.5C17.746 3.956 19 3 19 3l-.802 2.206s.919.473.802.794c-.034.093-.93.385-1 .5-.132.22.524.286.32.538C17.733 7.765 17 8.5 17 8.5L16 8s.15-.811 0-.962'
          />
          <circle cx='13.5' cy='7.5' r='1' fill='#ffc322' />
          <path fill='#ffc322' fillRule='nonzero' d='M12.5 9h5a.5.5 0 1 0 0-1h-5a.5.5 0 1 0 0 1' />
          <path
            fill='#ffc322'
            fillRule='nonzero'
            d='m14.197 10.46 3.5-1.5a.5.5 0 0 0-.394-.92l-3.5 1.5a.5.5 0 0 0 .394.92'
          />
        </g>
      </g>
    </svg>
  )
}
