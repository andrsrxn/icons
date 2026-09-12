import type { Icon } from './types'

export const IconNumbers: Icon = ({
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
      data-slot='icon-ui-numbers'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.5 10.66 2-1.8c.71-.64 1.07-.97 1.37-.83.3.13.3.61.3 1.58v6.74'
        stroke='currentColor'
      />
      <path
        d='M9.19 9.26c.67-.73 1.32-1.29 2.7-1.29 2.44 0 2.84 2.54 1.62 3.82-.8.83-2.68 2.13-3.94 3.3-.45.41-.68.62-.56.94.13.32.47.32 1.14.32h4.03'
        stroke='currentColor'
      />
      <path
        d='M17.74 8.96a3 3 0 0 1 2.34-.99c2.12 0 2.74 2.43 1.68 3.41s-2.61.76-2.61.76'
        stroke='currentColor'
      />
      <path
        d='M17.74 15.36c.59.56 1.15.99 2.34.99 2.12 0 2.74-2.43 1.68-3.41s-2.61-.76-2.61-.76'
        stroke='currentColor'
      />
    </svg>
  )
}
