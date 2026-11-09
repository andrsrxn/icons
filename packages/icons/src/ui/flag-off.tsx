import type { Icon } from './types'

export const IconFlagOff: Icon = ({
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
      data-slot='icon-ui-flag-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M3.12 3.43V22.4' stroke='currentColor' />
      <path d='m2.63 2.63 18.74 18.74' stroke='currentColor' />
      <path
        opacity='.2'
        d='M3.14 6.49c0-.75 0-1.12.21-1.4.21-.26.57-.36 1.3-.54l3.5-.9c.28-.07.42-.1.56-.1s.28.05.56.14l5.2 1.7c.28.1.42.15.56.15s.3-.03.59-.11l2.87-.8c1.17-.3 1.75-.47 2.14-.17s.4.9.4 2.1v6.9c0 .72 0 1.07-.2 1.34s-.55.37-1.23.57l-3.98 1.2a2 2 0 0 1-.59.13c-.14 0-.29-.05-.58-.13l-4.8-1.48c-.24-.07-.35-.1-.47-.11s-.24 0-.47.05l-3.22.56c-1.09.2-1.63.29-1.99-.01s-.36-.85-.36-1.96z'
        fill='currentColor'
      />
      <path
        d='M19.34 15.7s.2-.06.33-.12a2 2 0 0 0 1-.76c.35-.5.35-1.02.35-2.03V7.18c0-1.63 0-2.44-.4-2.74-.42-.3-1.3-.02-3.1.55h0a8 8 0 0 1-2.5.43c-3.03 0-3.94-1.7-6.99-1.7h-.4'
        stroke='currentColor'
      />
      <path
        d='M3.14 16.24s1.92-1.1 4.9-1.1c2.97 0 3.4 1.42 7 1.42q.63 0 1.21-.07'
        stroke='currentColor'
      />
      <path d='M3.14 4.97s.37-.25 1.06-.53' stroke='currentColor' />
    </svg>
  )
}
