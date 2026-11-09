import type { Icon } from './types'

export const IconCopyrightOff: Icon = ({
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
      data-slot='icon-ui-copyright-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path
        d='M6.98 3A10.31 10.31 0 0 1 21 17.03m-1.82 2.36a10.3 10.3 0 0 1-14.55-.18 10.3 10.3 0 0 1-.03-14.4'
        stroke='currentColor'
      />
      <path d='M14.87 16.87q-1.14.58-2.48.6a5.44 5.44 0 0 1-4.05-9.08' stroke='currentColor' />
      <path d='M14.87 7.17a5.4 5.4 0 0 0-4.17-.3' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
