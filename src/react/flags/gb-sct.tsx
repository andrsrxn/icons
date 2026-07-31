import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGBSCT: FlagIcon = ({
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
      <title>GB-SCT</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gb-sct-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gb-sct-linearGradient-2'>
          <stop stopColor='#1479D0' offset='0%' />
          <stop stopColor='#0A68BA' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gb-sct-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gb-sct-GB-SCT'>
          <rect
            id='gb-sct-FlagBackground'
            fill='url(#gb-sct-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='gb-sct-Mask-Copy'
            fill='url(#gb-sct-linearGradient-2)'
            x='0.000237781813'
            y='-0.00266538434'
            width='21'
            height='15'
          />
          <path
            d='M10.5002378,6.29111667 L-0.961614117,-1.44000006 L-2.07999992,0.218075088 L8.71194613,7.49733462 L-2.07999992,14.7765941 L-0.961614117,16.4346693 L10.5002378,8.70355256 L21.9620897,16.4346693 L23.0804755,14.7765941 L12.2885294,7.49733462 L23.0804755,0.218075088 L21.9620897,-1.44000006 L10.5002378,6.29111667 Z'
            id='gb-sct-Rectangle-2'
            fill='url(#gb-sct-linearGradient-1)'
          />
        </g>
      </g>
    </svg>
  )
}
