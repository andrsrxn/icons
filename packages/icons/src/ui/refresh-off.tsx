import type { Icon } from './types'

export const IconRefreshOff: Icon = ({
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
      data-slot='icon-ui-refresh-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m2.67 2.67 18.66 18.66' stroke='currentColor' />
      <circle opacity='.2' cx='11.91' cy='12.07' r='9.41' fill='currentColor' />
      <path
        d='M3.45 15.96c1.91 3.4 4.63 5.49 8.92 5.49a8.8 8.8 0 0 0 6.34-2.73'
        stroke='currentColor'
      />
      <path d='M20.68 15.96c-.19.39-.27.49-.46.8' stroke='currentColor' />
      <path
        d='M20.6 8.17c-1.92-3.4-5.1-5.48-8.93-5.48-1.4 0-2.76.4-3.85.92'
        stroke='currentColor'
      />
      <path d='M3.12 8.17c.6-.96 1.33-1.93 2.2-2.78' stroke='currentColor' />
      <path
        d='m16.76 8.61 1.65.27c1.54.25 2.3.38 2.86-.02s.68-1.17.93-2.7l.27-1.66'
        stroke='currentColor'
      />
      <path
        d='m1.54 19.23.35-1.64c.33-1.53.5-2.29 1.07-2.66s1.34-.2 2.87.13l1.64.35'
        stroke='currentColor'
      />
    </svg>
  )
}
