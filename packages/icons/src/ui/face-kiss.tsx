import type { Icon } from './types'

export const IconFaceKiss: Icon = ({
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
      data-slot='icon-ui-face-kiss'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.26' fill='currentColor' />
      <circle cx='12' cy='12' r='10.26' stroke='currentColor' />
      <path d='M10.74 10.33a1.95 1.95 0 1 0-3.9 0' stroke='currentColor' />
      <path d='M17.16 10.33a1.95 1.95 0 1 0-3.9 0' stroke='currentColor' />
      <path d='M11.87 16.28c.6 0 1.96 0 1.96-1.26s-1.4-1.26-1.96-1.26h-.85' stroke='currentColor' />
      <path
        d='M11.87 16.28c.47 0 1.96 0 1.96 1.25 0 1.26-1.2 1.26-1.96 1.26H11'
        stroke='currentColor'
      />
    </svg>
  )
}
