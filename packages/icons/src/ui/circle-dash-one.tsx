import type { Icon } from './types'

export const IconCircleDashOne: Icon = ({
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
      data-slot='icon-ui-circle-dash-one'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
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
        d='m9.44 8.78 1.75-1.1c.67-.44 1.01-.65 1.27-.51s.26.54.26 1.35v8.74'
        stroke='currentColor'
      />
    </svg>
  )
}
