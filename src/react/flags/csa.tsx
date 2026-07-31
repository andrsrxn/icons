import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCSA: FlagIcon = ({
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
      <title>CSA</title>

      <g clipPath='url(#clip0_503_3400)'>
        <rect width='28' height='20' fill='#fff' rx='2' />
        <mask
          id='mask0_503_3400'
          width='28'
          height='20'
          x='0'
          y='0'
          maskUnits='userSpaceOnUse'
          style={{ maskType: 'alpha' }}>
          <rect width='28' height='20' fill='#fff' rx='2' />
        </mask>
        <g mask='url(#mask0_503_3400)'>
          <path fill='#19bfbf' d='M0 0h28v20H0z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M10 16.041q0-.04.01-.08l.657-2.628.643-2.572a.33.33 0 0 0-.007-.186l-.593-1.777a.33.33 0 0 0-.167-.193l-1.025-.513a.33.33 0 0 1-.185-.298V5.412q0-.079.036-.15L10 4l.575-1.15a.33.33 0 0 1 .298-.183h3.46c.184 0 .334.149.334.333v.667c0 .184.149.333.333.333h.667c.184 0 .333.15.333.333v.794c0 .127.071.242.184.298l2.298 1.15a.33.33 0 0 1 .185.298V7.92a.3.3 0 0 1-.036.15l-.591 1.183a.33.33 0 0 1-.114.128l-1.852 1.236a.33.33 0 0 0-.114.128l-1.254 2.508a.33.33 0 0 1-.113.128l-1.853 1.236a.33.33 0 0 0-.113.128l-1.202 2.403a.33.33 0 0 1-.298.184h-.794A.333.333 0 0 1 10 17z'
            clipRule='evenodd'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_503_3400'>
          <rect width='28' height='20' fill='#fff' rx='2' />
        </clipPath>
      </defs>
    </svg>
  )
}
