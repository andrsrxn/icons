import type { Icon } from './types'

export const IconConciergeBell: Icon = ({
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
      data-slot='icon-ui-concierge-bell'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.49 20.02h.39a2 2 0 0 0 1.82-1.82v-.78a2 2 0 0 0-1.82-1.82l-.4-.01H3.69a2 2 0 0 0-1.82 1.83v.78a2 2 0 0 0 1.82 1.82z'
        fill='currentColor'
      />
      <path d='M3.5 15.17c0-2.8 2.82-7.63 8.5-7.63s8.5 4.72 8.5 7.63' stroke='currentColor' />
      <path
        d='m1.71 17.8.01-.38a2 2 0 0 1 1.82-1.82l.4-.01h16.52a2 2 0 0 1 1.82 1.83v.78a2 2 0 0 1-1.82 1.82H3.54a2 2 0 0 1-1.82-1.82z'
        stroke='currentColor'
      />
      <path d='M12 7.54V3.98' stroke='currentColor' />
      <path d='M14.95 3.98H9.06' stroke='currentColor' />
    </svg>
  )
}
