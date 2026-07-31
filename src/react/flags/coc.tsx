import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCOC: FlagIcon = ({
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
      viewBox='0 -4 28 28'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>COC</title>
      <g clipPath='url(#clip0_503_4098)'>
        <rect width='28' height='20' fill='#fff' rx='2' />
        <mask
          id='mask0_503_4098'
          width='28'
          height='20'
          x='0'
          y='0'
          maskUnits='userSpaceOnUse'
          style={{ maskType: 'alpha' }}>
          <rect width='28' height='20' fill='#fff' rx='2' />
        </mask>
        <g mask='url(#mask0_503_4098)'>
          <path fill='url(#paint0_linear_503_4098)' d='M0 0h28v20H0z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M13.444 3.333a.33.33 0 0 0-.2.067L10.72 5.293a.3.3 0 0 1-.119.057l-2.566.641a.3.3 0 0 0-.068.025L5.433 7.284a.33.33 0 0 0-.15.149L4.086 9.827a.33.33 0 0 0 .021.334l1.17 1.755c.037.055.056.12.056.185v1.76c0 .09.035.174.098.237l1.066 1.066a.33.33 0 0 0 .384.062l3.715-1.858a.3.3 0 0 1 .15-.035h2.466c.078 0 .154.028.214.078l3.814 3.178c.06.05.136.078.214.078h2.367a.33.33 0 0 0 .278-.149l2.511-3.767a.33.33 0 0 0 .056-.185V10.1q0-.1-.056-.185L20 6l-1.903-3.171a.33.33 0 0 0-.286-.162h-.419a.3.3 0 0 0-.212.513.3.3 0 0 1 .056.347l-.477.955a.33.33 0 0 1-.299.185h-1.588a.33.33 0 0 1-.298-.185l-.482-.964a.33.33 0 0 0-.298-.185zm5.89 14H18l.43.431c.131.13.342.13.472 0z'
            clipRule='evenodd'
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_503_4098'
          x1='0'
          x2='0'
          y1='0'
          y2='20'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#19bfbf' />
          <stop offset='1' stopColor='#10acac' />
        </linearGradient>
        <clipPath id='clip0_503_4098'>
          <rect width='28' height='20' fill='#fff' rx='2' />
        </clipPath>
      </defs>
    </svg>
  )
}
