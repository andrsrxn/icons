import type { Icon } from './types'

export const IconTruckLightning: Icon = ({
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
      data-slot='icon-ui-truck-lightning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.9 9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H6.6c0 .66.42 1.24 1.04 1.46l1.34.47-2.81 4.92-1.57.23.18-3.42-3.05-1.13v9a1.37 1.37 0 0 0 2.29 1.03l.5-.44a2.34 2.34 0 0 1 3.21.1c.44.44 1.04.69 1.67.69h2.35c.3 0 .46 0 .61-.02a3 3 0 0 0 1.32-.46c.13-.08.25-.18.5-.37.24-.2.36-.29.49-.37a3 3 0 0 1 1.31-.46c.15-.02.3-.02.62-.02h.3z'
        fill='currentColor'
      />
      <path
        d='M16.9 15.02V9.31c0-2.28 0-3.42-.59-4.2a3 3 0 0 0-.63-.65c-.8-.58-1.93-.58-4.2-.58'
        stroke='currentColor'
      />
      <path d='M1.73 11.62v3.36c0 1 .81 1.8 1.8 1.8' stroke='currentColor' />
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
      <path
        d='M4.36 3.07 2.88 5.33h0c-.3.46-.45.7-.46.9a.8.8 0 0 0 .32.7c.16.12.44.16.98.23l.08.02c.3.04.45.06.57.11q.37.2.44.61c.02.13 0 .28-.06.58h0c-.21 1.15-.32 1.73-.24 1.93a.8.8 0 0 0 1.1.44c.2-.1.52-.58 1.16-1.56l1.47-2.22c.35-.52.52-.78.53-1.02a.8.8 0 0 0-.27-.6c-.18-.16-.49-.21-1.1-.31l-.18-.03h0q-.37-.05-.5-.11a.8.8 0 0 1-.45-.64c-.01-.11 0-.25.06-.5h0c.18-1.05.28-1.57.22-1.76a.8.8 0 0 0-1.16-.46c-.17.1-.46.54-1.03 1.43'
        stroke='currentColor'
      />
    </svg>
  )
}
