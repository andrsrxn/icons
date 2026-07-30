import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagET: FlagIcon = ({
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
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>ET</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='et-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='et-linearGradient-2'>
          <stop stopColor='#20AA46' offset='0%' />
          <stop stopColor='#168835' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='et-linearGradient-3'>
          <stop stopColor='#E92F3B' offset='0%' />
          <stop stopColor='#D81824' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='et-linearGradient-4'>
          <stop stopColor='#FADF50' offset='0%' />
          <stop stopColor='#FCDC34' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='et-linearGradient-5'>
          <stop stopColor='#205CCA' offset='0%' />
          <stop stopColor='#154BAD' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='et-linearGradient-6'>
          <stop stopColor='#FFDB3D' offset='0%' />
          <stop stopColor='#FDD420' offset='100%' />
        </linearGradient>
      </defs>
      <g id='et-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='et-ET'>
          <rect
            id='et-FlagBackground'
            fill='url(#et-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='et-Rectangle-2'
            fill='url(#et-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='et-Rectangle-2'
            fill='url(#et-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='et-Rectangle-2'
            fill='url(#et-linearGradient-4)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <circle id='et-Oval-95' fill='url(#et-linearGradient-5)' cx='10.5' cy='7.5' r='3.5' />
          <path
            d='M10.5,8.47500004 L9.03053687,9.52254249 L9.57271986,7.80129158 L8.12235871,6.72745751 L9.92690936,6.7112084 L10.5,5 L11.0730906,6.7112084 L12.8776413,6.72745751 L11.4272801,7.80129158 L11.9694631,9.52254249 L10.5,8.47500004 Z M10.5,7.86095816 L11.0440151,8.2487725 L10.8432916,7.61154221 L11.3802349,7.21399436 L10.7121659,7.20797871 L10.5,6.57446629 L10.2878341,7.20797871 L9.61976514,7.21399436 L10.1567084,7.61154221 L9.95598494,8.2487725 L10.5,7.86095816 Z'
            id='et-Star-8'
            fill='url(#et-linearGradient-6)'
            fillRule='nonzero'
          />
        </g>
      </g>
    </svg>
  )
}
