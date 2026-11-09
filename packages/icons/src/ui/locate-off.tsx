import type { Icon } from './types'

export const IconLocateOff: Icon = ({
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
      data-slot='icon-ui-locate-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.17 12a6.83 6.83 0 1 0 13.66 0 6.83 6.83 0 0 0-13.66 0M12 15.12a3.12 3.12 0 1 1 0-6.24 3.12 3.12 0 0 1 0 6.24'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M7 7.08a7.02 7.02 0 0 0 9.96 9.9' stroke='currentColor' />
      <path d='M9.45 5.32a7.35 7.35 0 0 1 9.23 9.23' stroke='currentColor' />
      <path d='M9.9 9.85A3 3 0 0 0 12 15c.82 0 1.57-.33 2.11-.87' stroke='currentColor' />
      <path d='M12.29 9A2.7 2.7 0 0 1 15 11.71' stroke='currentColor' />
      <path d='M19.02 12H22' stroke='currentColor' />
      <path d='M2 12h2.98' stroke='currentColor' />
      <path d='M12 4.77V2' stroke='currentColor' />
      <path d='M12 22v-2.98' stroke='currentColor' />
      <path d='m2.67 2.67 18.66 18.66' stroke='currentColor' />
    </svg>
  )
}
