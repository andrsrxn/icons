import type { Icon } from './types'

export const IconScreenshotHorizontal: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-screenshot-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.5'
        height='20.4'
        rx='3'
        transform='matrix(0 -1 -1 0 22.2 19.25)'
        fill='currentColor'
      />
      <rect
        width='14.5'
        height='20.4'
        rx='3'
        transform='matrix(0 -1 -1 0 22.2 19.25)'
        stroke='currentColor'
      />
      <path
        d='M10.56 7.82H9.4c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v1.16'
        stroke='currentColor'
      />
      <path
        d='M13.44 16.18h1.16c1.89 0 2.83 0 3.42-.58.58-.59.58-1.53.58-3.42v-1.16'
        stroke='currentColor'
      />
    </svg>
  )
}
