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
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>CSA</title>

      <defs>
        <clipPath id='csa-a'>
          <path fill='#fff' d='M0 0h21v15H0z' />
        </clipPath>
        <clipPath id='csa-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#csa-clip)'>
        <g clipPath='url(#csa-a)'>
          <path fill='#19bfbf' d='M0 0h21v15H0z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M8.102 12.314q0-.03.008-.06l.975-3.9a.25.25 0 0 0-.005-.14l-.445-1.333a.25.25 0 0 0-.125-.144l-.77-.385a.25.25 0 0 1-.138-.224V4.342q0-.06.027-.113l.905-1.809a.25.25 0 0 1 .223-.137h2.595a.25.25 0 0 1 .25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 1 .25.25v.595c0 .095.054.182.138.224l1.724.862a.25.25 0 0 1 .139.224v.785q0 .06-.027.112l-.444.888a.25.25 0 0 1-.085.096l-1.39.927a.25.25 0 0 0-.085.096l-.94 1.88a.25.25 0 0 1-.085.097l-1.39.927a.25.25 0 0 0-.084.096l-.902 1.802a.25.25 0 0 1-.223.138h-.596a.25.25 0 0 1-.25-.249z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
