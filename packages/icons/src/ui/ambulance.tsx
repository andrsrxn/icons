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
        d='M16.9 9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.73c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v5.58a1.33 1.33 0 0 0 2.3.92l.29-.3A2.33 2.33 0 0 1 7.58 16l.12.11a2.5 2.5 0 0 0 1.7.68h2.36c.28 0 .42 0 .55-.02a3 3 0 0 0 1.4-.5c.12-.07.23-.16.44-.33s.32-.26.43-.33a3 3 0 0 1 1.4-.5c.14-.02.28-.02.55-.02h.37z'
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
        d='M18.5 16.79h.4c1.28 0 1.91 0 2.38-.28a2 2 0 0 0 .7-.7c.29-.48.29-1.11.29-2.38v-.12c0-.86 0-1.29-.1-1.7a4 4 0 0 0-.37-1.04c-.2-.37-.47-.7-1.02-1.36a5 5 0 0 0-.75-.79 2 2 0 0 0-.63-.3c-.25-.06-.53-.06-1.08-.06h-1.38'
        stroke='currentColor'
      />
    </svg>
  )
}
