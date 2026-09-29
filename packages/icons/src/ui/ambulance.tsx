import type { Icon } from './types'

export const IconAmbulance: Icon = ({
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
      data-slot='icon-ui-ambulance'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.9 9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.73c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v5.45A1.46 1.46 0 0 0 4 16.54l.58-.39a2.7 2.7 0 0 1 3.12.1 2.7 2.7 0 0 0 1.62.54h2.17c.76 0 1.15 0 1.51-.1q.07 0 .15-.04c.36-.11.68-.31 1.34-.71l.5-.3.3-.2a3 3 0 0 1 1.24-.34h.37z'
        fill='currentColor'
      />
      <path
        d='M16.9 15.02V9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.73c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v5.1c0 1 .81 1.8 1.8 1.8'
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
      <path d='M9.6 13.21V7.28' stroke='currentColor' />
      <path d='M12.57 10.25H6.64' stroke='currentColor' />
      <path
        d='M18.5 16.79h.94c.77 0 1.15 0 1.46-.1a2 2 0 0 0 1.26-1.27c.1-.3.1-.7.1-1.46v-1.12c0-.94-.76-1.7-1.7-1.7a.43.43 0 0 1-.42-.43v-.45c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.88-.88c-.43-.22-.98-.22-2.1-.22'
        stroke='currentColor'
      />
    </svg>
  )
}
