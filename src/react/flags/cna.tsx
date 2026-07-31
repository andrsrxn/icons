import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCNA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size ?? 'auto',
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
      <title>CNA</title>
      <g clipPath='url(#clip0_503_2926)'>
        <rect width='28' height='20' fill='#fff' rx='2' />
        <mask
          id='mask0_503_2926'
          width='28'
          height='20'
          x='0'
          y='0'
          maskUnits='userSpaceOnUse'
          style={{ maskType: 'alpha' }}>
          <rect width='28' height='20' fill='#fff' rx='2' />
        </mask>
        <g mask='url(#mask0_503_2926)'>
          <path fill='#19bfbf' d='M0 0h28v20H0z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='m13.333 14.667-.574-1.15a.33.33 0 0 0-.298-.184h-.323a.33.33 0 0 1-.236-.097l-2.471-2.472a.33.33 0 0 1-.098-.235V9.47a.33.33 0 0 0-.097-.235l-1.17-1.17a.33.33 0 0 1-.088-.156l-.6-2.4a.33.33 0 0 0-.218-.235l-1.804-.6-.044-.019-1.128-.564A.33.33 0 0 1 4 3.794V3c0-.184.15-.333.333-.333h.862c.089 0 .173.035.236.097l.471.472a.33.33 0 0 0 .236.097h1.057a.33.33 0 0 0 .236-.097l.471-.472a.33.33 0 0 1 .236-.097h2.45q.079 0 .149.035l1.193.596a.3.3 0 0 0 .149.035h1.176a.3.3 0 0 0 .149-.035l1.192-.596a.3.3 0 0 1 .15-.035H17c.184 0 .333.149.333.333v.667A.333.333 0 0 1 17 4h-.667a.333.333 0 0 0-.333.333v1.461c0 .126.071.242.184.298l.667.333a.333.333 0 0 0 .482-.298V5c0-.184.15-.333.334-.333H19c.184 0 .333.149.333.333s.15.333.334.333H21c.184 0 .333.15.333.334v.946a.3.3 0 0 1-.017.105l-.624 1.874a.3.3 0 0 1-.081.13l-1.906 1.906a.3.3 0 0 0-.062.087l-.608 1.215a.3.3 0 0 0-.035.149V13c0 .184-.15.333-.333.333h-.128a.33.33 0 0 1-.298-.184l-.482-.965A.33.33 0 0 0 16.46 12h-1.588a.33.33 0 0 0-.298.184l-.5 1a.33.33 0 0 0 0 .298l.5 1a.33.33 0 0 0 .298.185h.989c.088 0 .173.035.236.097l1.138 1.138a.33.33 0 0 1 .097.236V17a.333.333 0 0 1-.333.333h-.794a.33.33 0 0 1-.298-.184l-.482-.965a.33.33 0 0 0-.299-.184h-.921a.33.33 0 0 1-.298-.184z'
            clipRule='evenodd'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_503_2926'>
          <rect width='28' height='20' fill='#fff' rx='2' />
        </clipPath>
      </defs>
    </svg>
  )
}
