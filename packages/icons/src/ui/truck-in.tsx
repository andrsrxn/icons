import type { Icon } from './types'

export const IconTruckIn: Icon = ({
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
      data-slot='icon-ui-truck-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.9 9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H5.73c-1.88 0-2.82 0-3.41.59-.59.58-.59 1.52-.59 3.41v7.54a1.36 1.36 0 0 0 2.3 1l.35-.33c.95-.86 2.4-.85 3.33.03.46.43 1.06.67 1.68.67h2.34c.34 0 .5 0 .67-.02a3 3 0 0 0 1.25-.43l.54-.4.53-.4a3 3 0 0 1 1.26-.43c.16-.02.33-.02.66-.02h.26z'
        fill='currentColor'
      />
      <path
        d='M16.9 15.02V9.45c0-2.41 0-3.62-.66-4.44a3 3 0 0 0-.47-.47c-.82-.66-2.03-.66-4.45-.66'
        stroke='currentColor'
      />
      <path d='M1.73 10.79v4.2c0 .99.81 1.8 1.8 1.8' stroke='currentColor' />
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
      <path d='M6.07 8.3V2.42' stroke='currentColor' />
      <path
        d='m3.36 6.74.58.59c1 1 1.5 1.5 2.12 1.5s1.13-.5 2.13-1.5l.58-.59'
        stroke='currentColor'
      />
    </svg>
  )
}
