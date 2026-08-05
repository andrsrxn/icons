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
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>COC</title>

      <defs>
        <clipPath id='coc-a'>
          <path fill='#fff' d='M0 0h21v15H0z' />
        </clipPath>
        <clipPath id='coc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#coc-clip)'>
        <g clipPath='url(#coc-a)'>
          <path fill='#19bfbf' d='M0 0h21v15H0z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M10.564 2.562a.25.25 0 0 0-.15.05l-1.893 1.42a.2.2 0 0 1-.089.043l-1.924.48a.2.2 0 0 0-.051.02l-1.901.95a.25.25 0 0 0-.112.112l-.898 1.796a.25.25 0 0 0 .016.25l.877 1.316a.25.25 0 0 1 .042.139v1.32c0 .067.026.13.074.178l.799.8a.25.25 0 0 0 .288.046l2.786-1.394a.2.2 0 0 1 .113-.026h1.85c.058 0 .115.021.16.059l2.86 2.383a.25.25 0 0 0 .16.059h1.776a.25.25 0 0 0 .209-.112l1.883-2.825a.25.25 0 0 0 .042-.14V7.638a.25.25 0 0 0-.042-.138L15.48 4.562l-1.427-2.378a.25.25 0 0 0-.215-.122h-.314a.225.225 0 0 0-.159.385.23.23 0 0 1 .042.26l-.357.717a.25.25 0 0 1-.225.139h-1.19a.25.25 0 0 1-.224-.14l-.362-.722a.25.25 0 0 0-.223-.139zm4.418 10.5h-1l.322.323a.25.25 0 0 0 .354 0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
