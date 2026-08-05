import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCAF: FlagIcon = ({
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
      <title>CAF</title>

      <defs>
        <clipPath id='caf-a'>
          <path fill='#fff' d='M0 0h21v15H0z' />
        </clipPath>
        <clipPath id='caf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#caf-clip)'>
        <g clipPath='url(#caf-a)'>
          <path fill='#19bfbf' d='M0 0h21v15H0z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M6.012 4.127a.25.25 0 0 1 .07-.218l1.836-1.836A.25.25 0 0 1 8.095 2h1.242a.25.25 0 0 1 .224.138l.361.724a.25.25 0 0 0 .224.138h1.692a.25.25 0 0 1 .223.138l1.362 2.724a.25.25 0 0 0 .224.138h.845a.25.25 0 0 1 .2.4l-1.186 1.582a.2.2 0 0 0-.024.038l-.463.927a.23.23 0 0 0-.027.112v.882a.2.2 0 0 1-.026.112l-.474.947-.932 1.862a.25.25 0 0 1-.223.137h-.691a.25.25 0 0 1-.224-.138l-.405-.809a.2.2 0 0 1-.026-.111V9.103a.25.25 0 0 0-.073-.177l-.385-.384a.2.2 0 0 1-.06-.098l-.425-1.273A.25.25 0 0 0 8.811 7H6.703a.25.25 0 0 1-.247-.209zm7.98 6.123a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.69a.2.2 0 0 1-.027.113l-.405.809a.25.25 0 0 1-.223.138h-.096a.25.25 0 0 1-.25-.25z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
