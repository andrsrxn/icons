import type { Icon } from './types'

export const IconBrowserLock: Icon = ({
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
      data-slot='icon-ui-browser-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.97 5.69c0-1.08 0-1.61.2-2.03a2 2 0 0 1 .92-.92c.42-.2.95-.2 2.03-.2h13.74c1.07 0 1.6 0 2.02.2q.62.31.93.92c.2.42.2.95.2 2.03 0 .53 0 .8-.1 1a1 1 0 0 1-.47.47c-.2.1-.47.1-1 .1H3.53c-.54 0-.8 0-1.01-.1a1 1 0 0 1-.46-.46c-.1-.21-.1-.48-.1-1.01'
        fill='currentColor'
      />
      <rect opacity='.2' x='14.8' y='14.97' width='7.2' height='5.37' rx='1' fill='currentColor' />
      <path
        d='M22 9.45v-.91c0-2.83 0-4.25-.87-5.12-.88-.88-2.3-.88-5.12-.88H7.97c-2.83 0-4.25 0-5.13.88-.87.87-.87 2.29-.87 5.12v3.61c0 2.83 0 4.25.87 5.12.88.88 2.3.88 5.13.88h3.28'
        stroke='currentColor'
      />
      <path d='M22 7.26H1.98' stroke='currentColor' />
      <rect x='14.8' y='14.97' width='7.2' height='5.37' rx='1' stroke='currentColor' />
      <path d='m20.43 14.97-.18-1.51a1.84 1.84 0 0 0-3.64-.02l-.2 1.53' stroke='currentColor' />
    </svg>
  )
}
