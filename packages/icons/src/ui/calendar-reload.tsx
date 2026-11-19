import type { Icon } from './types'

export const IconCalendarReload: Icon = ({
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
      data-slot='icon-ui-calendar-reload'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m3 7.66.01-.36a4 4 0 0 1 3.84-3.84h10.28a4 4 0 0 1 3.85 4.2v.09a1 1 0 0 1-.96.96H3.96a1 1 0 0 1-.95-.96z'
        fill='currentColor'
      />
      <path
        d='M10.34 21.43c-3.13 0-4.69 0-5.76-.82a4 4 0 0 1-.75-.75c-.82-1.07-.82-2.64-.82-5.76v-2.64C3 7.69 3 5.8 4.18 4.63S7.24 3.46 11 3.46h2.9c2.87 0 4.31 0 5.34.7a4 4 0 0 1 1.02 1.03c.7 1.02.7 2.46.7 5.34'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <path
        d='M21.58 16.17c-1.48-1.95-2.93-2.31-4.11-2.31a4.3 4.3 0 1 0 3.02 7.38'
        stroke='currentColor'
      />
      <path
        d='M22.15 13.43v.3c0 1.42 0 2.12-.43 2.56-.44.44-1.15.44-2.57.44h-.3'
        stroke='currentColor'
      />
    </svg>
  )
}
