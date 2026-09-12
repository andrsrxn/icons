import type { Icon } from './types'

export const IconJupiter: Icon = ({
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
      data-slot='icon-ui-jupiter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='11.95' cy='11.6' r='8.91' fill='currentColor' />
      <circle cx='11.95' cy='11.6' r='8.91' stroke='currentColor' />
      <path
        d='M16.84 3.47c2.56-1.5 4.54-2.07 5.24-1.3 1.28 1.39-2.2 6.66-7.77 11.78S3.2 22.08 1.91 20.69c-.67-.73-.03-2.53 1.54-4.81'
        stroke='currentColor'
      />
    </svg>
  )
}
