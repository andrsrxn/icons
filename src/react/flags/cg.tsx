import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCG: FlagIcon = ({
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
      <title>CG</title>

      <defs>
        <clipPath id='cg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cg-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cg-linearGradient-2'>
          <stop stopColor='#F33630' offset='0%' />
          <stop stopColor='#DC241E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cg-linearGradient-3'>
          <stop stopColor='#009643' offset='0%' />
          <stop stopColor='#09C15B' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cg-linearGradient-4'>
          <stop stopColor='#FCDF4A' offset='0%' />
          <stop stopColor='#FCE154' offset='100%' />
        </linearGradient>
      </defs>
      <g
        clipPath='url(#cg-clip)'
        id='cg-Symbols'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'>
        <g id='cg-CG'>
          <rect
            id='cg-FlagBackground'
            fill='url(#cg-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <g id='cg-Group-2' transform='translate(-1.060000, -5.020000)'>
            <polygon
              id='cg-Rectangle-74'
              fill='url(#cg-linearGradient-2)'
              points='6.06152385 19.017348 21.0615238 5.01734803 22.0615238 5.01734803 22.0615238 20.017348 6.06152385 20.017348'
            />
            <polygon
              id='cg-Rectangle-74-Copy'
              fill='url(#cg-linearGradient-3)'
              transform='translate(9.061524, 12.517348) scale(-1, -1) translate(-9.061524, -12.517348) '
              points='1.06152385 19.017348 16.0615238 5.01734803 17.0615238 5.01734803 17.0615238 20.017348 1.06152385 20.017348'
            />
            <polygon
              id='cg-Rectangle-69-Copy'
              fill='url(#cg-linearGradient-4)'
              transform='translate(11.870896, 12.167073) rotate(134.000000) translate(-11.870896, -12.167073) '
              points='-2.62910413 9.66707303 26.3708959 9.66707303 26.3708959 14.667073 -2.62910413 14.667073'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
