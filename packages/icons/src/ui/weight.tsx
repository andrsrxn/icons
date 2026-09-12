import type { Icon } from './types'

export const IconWeight: Icon = ({
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
      data-slot='icon-ui-weight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.02 11.9c.44-1.32.66-1.98 1.18-2.36.53-.38 1.22-.38 2.62-.38h6.63c1.43 0 2.14 0 2.67.4.53.39.74 1.07 1.15 2.43l1.55 5.07c.72 2.37 1.09 3.55.49 4.36s-1.84.81-4.31.81H7.14c-2.53 0-3.8 0-4.4-.83s-.2-2.03.6-4.43z'
        fill='currentColor'
      />
      <path
        d='M4.15 13.23c.6-2.1.9-3.15 1.7-3.76s1.9-.6 4.08-.6h4.17c2.19 0 3.28 0 4.09.6.8.62 1.1 1.67 1.69 3.78l.38 1.36c.98 3.5 1.47 5.24.57 6.43s-2.71 1.19-6.35 1.19H9.54c-3.64 0-5.46 0-6.36-1.2-.9-1.18-.4-2.93.59-6.44z'
        stroke='currentColor'
      />
      <circle cx='12' cy='5.26' r='3.49' stroke='currentColor' />
      <path
        d='M8.07 16.42s.84-.87 2.18-.87 2.61.87 3.93.87 1.75-.87 1.75-.87'
        stroke='currentColor'
      />
    </svg>
  )
}
