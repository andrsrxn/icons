import type { Icon } from './types'

export const IconTruckOut: Icon = ({
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
      data-slot='icon-ui-truck-out'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.58 3.88q.53 0 .92-.36l.2-.18c.78-.7 1.96-.71 2.75-.03l.05.05c.39.33.89.52 1.4.52h2.4c2.44 0 3.66 0 4.49.67a3 3 0 0 1 .44.44c.67.82.67 2.05.67 4.5v4.4c0 .66-.54 1.2-1.21 1.2q-.42.01-.75.26l-.75.59-.54.4a3 3 0 0 1-1.25.43c-.16.02-.33.02-.67.02H9.4c-.62 0-1.22-.24-1.68-.67a2.44 2.44 0 0 0-3.33-.03l-.36.34a1.36 1.36 0 0 1-2.29-1v-9.7c0-1.03.83-1.85 1.85-1.85'
        fill='currentColor'
      />
      <path
        d='M16.9 15.02V8.56c0-1.57 0-2.35-.29-2.95a3 3 0 0 0-1.44-1.45c-.6-.28-1.39-.28-2.95-.28'
        stroke='currentColor'
      />
      <path d='M1.73 8.19v6.8c0 .99.81 1.8 1.8 1.8' stroke='currentColor' />
      <path
        d='M16.94 7.06h1.13c.73 0 1.1 0 1.43.12a2 2 0 0 1 .41.2c.3.2.52.5.96 1.09a8 8 0 0 1 1.08 1.63q.12.3.2.6c.12.48.12.97.12 1.96v.36c0 1.66 0 2.5-.47 3.05l-.25.25c-.56.47-1.4.47-3.06.47'
        stroke='currentColor'
      />
      <circle
        cx='6.07'
        cy='17.52'
        r='2.6'
        transform='rotate(90 6.07 17.52)'
        stroke='currentColor'
      />
      <circle
        cx='15.93'
        cy='17.52'
        r='2.6'
        transform='rotate(90 15.93 17.52)'
        stroke='currentColor'
      />
      <path d='M8.67 16.79h4.66' stroke='currentColor' />
      <path d='M6.07 2.9v5.88' stroke='currentColor' />
      <path
        d='m3.36 4.45.58-.58c1-1 1.5-1.5 2.12-1.5s1.13.5 2.13 1.5l.58.58'
        stroke='currentColor'
      />
    </svg>
  )
}
