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
        d='M16.9 9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H6.6c0 .66.42 1.24 1.04 1.46l1.34.47-2.81 4.92-1.57.23.18-3.42-3.05-1.13v8.92A1.46 1.46 0 0 0 4 16.54l.58-.39a2.7 2.7 0 0 1 3.12.1 2.7 2.7 0 0 0 1.62.54h2.17c.76 0 1.15 0 1.51-.1q.07 0 .15-.04c.36-.11.68-.31 1.34-.71l.5-.3.3-.2a3 3 0 0 1 1.24-.34h.37z'
        fill='currentColor'
      />
      <path
        d='M16.9 15.02V9.31c0-2.28 0-3.42-.59-4.2a3 3 0 0 0-.63-.65c-.8-.58-1.93-.58-4.2-.58'
        stroke='currentColor'
      />
      <path d='M3.54 16.79c-1 0-1.8-.81-1.8-1.8v-3.37' stroke='currentColor' />
      <path
        d='M18.5 16.79c1.66 0 2.49 0 3.05-.47l.25-.25c.47-.56.47-1.4.47-3.05v-.36c0-.99 0-1.48-.12-1.95a4 4 0 0 0-.2-.61 8 8 0 0 0-1.08-1.63 4 4 0 0 0-.96-1.08 2 2 0 0 0-.4-.2c-.34-.13-.7-.13-1.44-.13h-1.13'
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
        d='m2.88 5.33 1.48-2.26c.57-.89.86-1.33 1.03-1.43a.8.8 0 0 1 1.16.46c.06.19-.04.71-.22 1.75h0q-.07.37-.06.5.06.45.45.65.13.06.5.11h0l.17.03c.62.1.93.15 1.1.3a.8.8 0 0 1 .28.61c0 .24-.18.5-.53 1.02L6.77 9.3c-.64.98-.96 1.47-1.16 1.56a.8.8 0 0 1-1.1-.44c-.08-.2.03-.78.24-1.93h0c.05-.3.08-.45.06-.58a.8.8 0 0 0-.44-.6 2 2 0 0 0-.57-.12l-.08-.02c-.54-.07-.82-.1-.98-.23a.8.8 0 0 1-.32-.7c.01-.2.16-.44.46-.9'
        stroke='currentColor'
      />
    </svg>
  )
}
