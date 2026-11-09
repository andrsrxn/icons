import type { Icon } from './types'

export const IconTextCaseSnake: Icon = ({
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
      data-slot='icon-ui-text-case-snake'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M19.49 17.41c-1.3 0-2.35-.95-2.35-2.12 0-1.55 1.05-2.12 2.35-2.12h2.35v2.12c0 1.17-1.05 2.12-2.35 2.12'
        stroke='currentColor'
      />
      <path
        d='M17.73 10.26c.6-.77 1.38-1.21 2.4-1.02 1.56.29 1.94 1.3 1.94 2.99v4.27c0 .78.32 1.03.32 1.03'
        stroke='currentColor'
      />
      <path d='M14.92 17.19H12.1' stroke='currentColor' />
      <path
        d='m1.6 17.19 1.82-6.17h0c.9-3.04 1.34-4.56 2.17-4.55.84.01 1.24 1.54 2.06 4.6l1.63 6.12'
        stroke='currentColor'
      />
      <path d='M3.04 13.07H8' stroke='currentColor' />
    </svg>
  )
}
