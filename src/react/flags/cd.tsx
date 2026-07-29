import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagCD: FlagIcon = ({ className, ...props }: FlagIconProps) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>CD</title>

      <defs>
        <clipPath id='cd-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cd-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cd-linearGradient-2'>
          <stop stopColor='#158AFF' offset='0%' />
          <stop stopColor='#007FFF' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cd-linearGradient-3'>
          <stop stopColor='#CE1120' offset='0%' />
          <stop stopColor='#E11B2B' offset='100%' />
        </linearGradient>
      </defs>
      <g
        clipPath='url(#cd-clip)'
        id='cd-Symbols'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'>
        <g id='cd-CD'>
          <rect
            id='cd-FlagBackground'
            fill='url(#cd-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <g id='cd-Group-2' transform='translate(-4.290000, -1.440000)'>
            <rect
              id='cd-Mask-Copy'
              fill='url(#cd-linearGradient-2)'
              x='4.29377901'
              y='1.44262682'
              width='21'
              height='15'
            />
            <polygon
              id='cd-Rectangle-69-Copy'
              fill='#FDD216'
              transform='translate(14.281566, 9.255882) rotate(153.000000) translate(-14.281566, -9.255882) '
              points='-0.2184339 6.25588182 28.7815661 6.25588182 28.7815661 12.2558818 -0.2184339 12.2558818'
            />
            <rect
              id='cd-Rectangle-69'
              fill='url(#cd-linearGradient-3)'
              transform='translate(14.557467, 9.073824) rotate(153.000000) translate(-14.557467, -9.073824) '
              x='0.0574665988'
              y='7.07382404'
              width='29'
              height='4'
            />
            <polygon
              id='cd-Star-8'
              fill='#FDD216'
              points='7.79377901 5.91762686 6.32431588 6.9651693 6.86649887 5.2439184 5.41613772 4.17008433 7.22068837 4.15383522 7.79377901 2.44262682 8.36686965 4.15383522 10.1714203 4.17008433 8.72105915 5.2439184 9.26324214 6.9651693'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
