import type { Icon } from './types'

export const IconSkew: Icon = ({
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
      data-slot='icon-ui-skew'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.9 20.88c2.21 0 3.32 0 4.13-.62s1.1-1.7 1.66-3.84l1.53-5.77c.92-3.46 1.38-5.2.48-6.36S19 3.12 15.42 3.12h-5.35c-2.22 0-3.33 0-4.14.62s-1.1 1.7-1.66 3.84l-1.53 5.77c-.92 3.46-1.38 5.2-.48 6.36s2.7 1.17 6.28 1.17z'
        fill='currentColor'
      />
      <path
        d='M13.9 20.88c2.22 0 3.33 0 4.13-.62.81-.62 1.1-1.69 1.67-3.83l1.54-5.77c.93-3.46 1.39-5.2.49-6.37s-2.7-1.17-6.29-1.17H10.1c-2.22 0-3.33 0-4.13.62-.81.62-1.1 1.69-1.67 3.83l-1.54 5.77c-.93 3.46-1.39 5.2-.49 6.37s2.7 1.17 6.29 1.17z'
        stroke='currentColor'
      />
    </svg>
  )
}
