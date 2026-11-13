import type { Icon } from './types'

export const IconCashierOff: Icon = ({
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
      data-slot='icon-ui-cashier-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.86 20.5c.78 0 1.17 0 1.5-.08a2.5 2.5 0 0 0 1.75-1.76c.1-.32.1-.71.1-1.5 0-.77 0-1.17-.1-1.49a2.5 2.5 0 0 0-1.76-1.76c-.32-.08-.7-.08-1.49-.08H5.14c-.78 0-1.17 0-1.5.08a2.5 2.5 0 0 0-1.75 1.76c-.1.32-.1.72-.1 1.5s0 1.17.1 1.5c.23.85.9 1.52 1.76 1.75.32.09.7.09 1.49.09z'
        fill='currentColor'
      />
      <path
        d='M13.5 13.83H5.13c-.78 0-1.17 0-1.5.08a2.5 2.5 0 0 0-1.75 1.76c-.1.32-.1.72-.1 1.5s0 1.17.1 1.5c.23.85.9 1.52 1.76 1.75.32.09.7.09 1.49.09h13.72c.78 0 1.17 0 1.5-.09'
        stroke='currentColor'
      />
      <path
        d='M17.06 13.83h1.8c.78 0 1.17 0 1.5.08.85.24 1.52.9 1.75 1.76.1.32.1.72.1 1.5s0 1.17-.1 1.5'
        stroke='currentColor'
      />
      <path d='m4.52 13.83 1.1-5.96a2 2 0 0 1 .9-1.33' stroke='currentColor' />
      <path
        d='m19.48 13.83-.67-3.96c-.27-1.6-.4-2.39-.97-2.86s-1.36-.47-2.98-.47h-4.79'
        stroke='currentColor'
      />
      <path d='M8.66 9.05h.3' stroke='currentColor' />
      <path d='M7.92 11.56h2.34' stroke='currentColor' />
      <path d='M14.96 6.54V3.49' stroke='currentColor' />
      <path d='M16.65 3.5h-3.38' stroke='currentColor' />
      <path
        d='M12.68 17.17a.68.68 0 1 1-1.36 0 .68.68 0 0 1 1.36 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
