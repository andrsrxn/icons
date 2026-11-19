import type { Icon } from './types'

export const IconRotate360Right: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-rotate-360-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12' cy='12.08' rx='10.22' ry='4.88' fill='currentColor' />
      <path
        d='M12 16.96c-5.64 0-10.22-2.18-10.22-4.88S6.36 7.2 12 7.2s10.22 2.18 10.22 4.88c0 1.4-1.53 3.23-4.63 4.1'
        stroke='currentColor'
      />
      <path
        d='m9.83 19.68.16-.12c1.52-1.12 2.28-1.68 2.4-2.5s-.44-1.58-1.56-3.1l-.12-.16'
        stroke='currentColor'
      />
    </svg>
  )
}
