import type { Icon } from './types'

export const IconShieldOff: Icon = ({
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
      data-slot='icon-ui-shield-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.97 12.25v8.16c0 .87 0 1.31.28 1.45.27.14.62-.13 1.32-.66l4.12-3.1q.14-.1.17-.15l.12-.2 1.83-3.5.05-.11.04-.12 1.47-6.36c.08-.36.12-.54.05-.7s-.23-.24-.56-.41l-4.7-2.47-2.71-1.49c-.66-.36-.99-.54-1.23-.4-.25.15-.25.53-.25 1.28z'
        fill='currentColor'
      />
      <path
        d='M8.1 3.8q.52-.3 1-.61c1.53-1 2.3-1.5 2.89-1.51.6 0 1.37.5 2.91 1.5 1 .65 2.17 1.3 3.4 1.86 1.58.7 2.37 1.06 2.7 1.64.32.58.23 1.23.06 2.52-.26 1.94-.78 3.9-1.64 5.75'
        stroke='currentColor'
      />
      <path d='M11.97 7.89V2.23' stroke='currentColor' />
      <path d='M11.97 22.29V11.7' stroke='currentColor' />
      <path
        d='M17.8 17.71a16 16 0 0 1-4.03 3.89c-.77.52-1.16.78-1.77.78s-1-.26-1.77-.79c-4.75-3.19-6.8-8.1-7.34-12.8-.11-.95-.17-1.43 0-1.88q.13-.32.34-.59c.31-.37.9-.61 2.07-1.11'
        stroke='currentColor'
      />
      <path d='m2.74 2.45 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
