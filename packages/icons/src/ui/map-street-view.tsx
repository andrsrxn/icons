import type { Icon } from './types'

export const IconMapStreetView: Icon = ({
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
      data-slot='icon-ui-map-street-view'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='4.54'
        r='3.09'
        transform='rotate(90 12 4.54)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.17 22.01c-5.1 0-9.25-1.57-9.25-3.5 0-1.57 2.68-2.89 6.38-3.35.9-.1 1.03 3.88 2.87 3.88 1.56 0 1.67-4 2.46-3.92 3.92.4 6.8 1.77 6.8 3.38 0 1.94-4.14 3.51-9.26 3.51'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12 19.06c-1.37 0-1.93-3.84-2.73-4.83-.6-.74-1.61-.89-1.61-1.91a4.34 4.34 0 1 1 8.68 0c0 1.02-1.15 1.17-1.74 1.91-.8 1-1.23 4.83-2.6 4.83'
        fill='currentColor'
      />
      <path d='M15.09 4.9A3.1 3.1 0 0 1 12 7.97a3.09 3.09 0 1 1 3.09-3.09' stroke='currentColor' />
      <path
        d='M12 7.98c-2.4 0-4.34 1.8-4.34 4.02 0 .6 0 .9.12 1.12q.15.24.4.4c.22.12.52.12 1.12.12h.19s-.3 5.02 2.51 5.02 2.58-5.02 2.58-5.02h.12c.6 0 .9 0 1.12-.13a1 1 0 0 0 .4-.4c.12-.22.12-.52.12-1.11 0-2.22-1.94-4.02-4.34-4.02'
        stroke='currentColor'
      />
      <path
        d='M18.82 16.27c1.62.63 2.6 1.48 2.6 2.42 0 1.94-4.21 3.51-9.42 3.51s-9.43-1.57-9.43-3.5c0-.95 1-1.8 2.6-2.43'
        stroke='currentColor'
      />
    </svg>
  )
}
