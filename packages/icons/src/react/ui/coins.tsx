import type { Icon } from './types'

export const IconCoins: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-coins'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.06 14.1c0-1.07-3.17-.64-5.54-1.17-1.64-.37-3.86-1.86-3.86-1.86-3.96 0-4.93 1.21-4.93 3.04 0 1.82 3.2 3.3 7.16 3.3s7.17-1.48 7.17-3.3'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='7.16'
        cy='3.3'
        rx='7.16'
        ry='3.3'
        transform='matrix(1 0 0 -1 6.94 10.07)'
        fill='currentColor'
      />
      <path
        d='M7.26 11.17c-2.8.44-4.53 1.49-4.53 2.94 0 1.82 3.2 3.3 7.16 3.3s7.17-1.48 7.17-3.3q0-.56-.38-1.06'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <ellipse
        cx='7.16'
        cy='3.3'
        rx='7.16'
        ry='3.3'
        transform='matrix(1 0 0 -1 6.94 10.07)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.06 17.23c0 1.83-3.21 3.3-7.17 3.3s-7.16-1.47-7.16-3.3M21.27 9.9c0 1.82-3.2 3.3-7.16 3.3s-7.17-1.48-7.17-3.3m-4.21 4.2v3.13M6.94 6.77v3.12M11 10v2.37m-4.06 5.38v2.37M17.06 9.9v2.47M13 17.65v2.47m4.06-5.9v3.14m4.21-10.48v3.14'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
