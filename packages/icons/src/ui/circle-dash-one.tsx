import type { Icon } from './types'

export const IconCircleDashOne: Icon = ({
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
      data-slot='icon-ui-circle-dash-one'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.22'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <path d='M2 14.32c-.24-.87-.3-1.4-.28-2.3.02-.8.08-1.27.28-2.05' stroke='currentColor' />
      <path d='M22 14.32c.24-.87.3-1.4.28-2.3A8 8 0 0 0 22 9.97' stroke='currentColor' />
      <path d='M14.17 22.14c-.86.24-1.4.3-2.3.29a8 8 0 0 1-2.05-.29' stroke='currentColor' />
      <path d='M14.17 2.15c-.86-.24-1.4-.3-2.3-.29-.8.02-1.27.09-2.05.29' stroke='currentColor' />
      <path
        d='M20.6 17.68c-.44.78-.77 1.2-1.42 1.82-.58.56-.96.84-1.65 1.25'
        stroke='currentColor'
      />
      <path d='M6.47 3.54c-.78.44-1.2.77-1.83 1.42-.55.58-.84.96-1.25 1.65' stroke='currentColor' />
      <path d='M17.53 3.54c.78.44 1.2.77 1.83 1.42.55.58.84.96 1.25 1.65' stroke='currentColor' />
      <path d='M3.4 17.68c.44.78.77 1.2 1.42 1.82.58.56.96.84 1.65 1.25' stroke='currentColor' />
      <path
        d='m8.67 11.06 3.05-2.78c.72-.65 1.08-.98 1.37-.85.3.14.3.62.3 1.6v8.21'
        stroke='currentColor'
      />
    </svg>
  )
}
