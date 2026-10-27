import type { Icon } from './types'

export const IconGlobeCurrency: Icon = ({
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
      data-slot='icon-ui-globe-currency'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.7 11.92a10.23 10.23 0 0 0 14.37 9.36l1.47-.8a10.22 10.22 0 1 0-15.85-8.56'
        fill='currentColor'
      />
      <path d='M22.3 12a10.3 10.3 0 1 0-11.23 10.27' stroke='currentColor' />
      <path
        d='M16.37 12c0-5.7-1.96-10.3-4.37-10.3S7.63 6.3 7.63 12c0 4.77 1.56 9.03 3.42 10.2'
        stroke='currentColor'
      />
      <path d='M1.7 12h20.6' stroke='currentColor' />
      <path
        d='M19.58 16.6c-.2-.6-1.09-1.06-2.14-1.06s-2.2.4-2.2 1.59c0 2.57 4.34.6 4.34 2.98 0 1.1-1.06 1.52-2.14 1.52-1.07 0-1.85-.46-2.2-1.07'
        stroke='currentColor'
      />
      <path d='M17.4 22.56v-.82' stroke='currentColor' />
      <path d='M17.4 15.41v-.8' stroke='currentColor' />
    </svg>
  )
}
