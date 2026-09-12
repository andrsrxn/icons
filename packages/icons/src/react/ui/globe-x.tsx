import type { Icon } from './types'

export const IconGlobeX: Icon = ({
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
      data-slot='icon-ui-globe-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='11.99'
        cy='11.99'
        r='10.28'
        transform='rotate(90 11.99 11.99)'
        fill='currentColor'
      />
      <path d='M11.99 22.27a10.28 10.28 0 1 1 10.28-10.28' stroke='currentColor' />
      <path
        d='M11.99 22.27c-2.41 0-4.36-4.6-4.36-10.28S9.58 1.7 11.99 1.7c2.4 0 4.36 4.6 4.36 10.28'
        stroke='currentColor'
      />
      <path d='M1.7 11.99h20.57' stroke='currentColor' />
      <path d='M15.82 15.82 22 22' stroke='currentColor' />
      <path d='M15.82 22 22 15.82' stroke='currentColor' />
    </svg>
  )
}
