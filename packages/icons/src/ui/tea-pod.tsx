import type { Icon } from './types'

export const IconTeaPod: Icon = ({
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
      data-slot='icon-ui-tea-pod'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M13.4 20.77c-2.76 0-5.03-.5-6.55-.96-.94-.29-1.4-.43-1.8-.98s-.39-1.02-.36-1.97q0-.36.05-.72c.07-.77.1-1.16.04-1.42-.06-.25-.23-.5-.57-1L1.96 10.4a1.45 1.45 0 0 1 1.91-2.09l1.63.9c.8.45 1.2.67 1.56.68s.96-.27 2.16-.83a10 10 0 0 1 4.19-.84c5.94 0 8.1 3.46 8.75 8.15.16 1.09.23 1.63-.15 2.25-.39.61-.88.78-1.87 1.1a22 22 0 0 1-6.73 1.05'
        stroke='currentColor'
      />
      <path d='M8.66 9.18c0-3.17 1.3-5.74 4.87-5.74S18.4 6 18.4 9.18' stroke='currentColor' />
      <path
        opacity='.2'
        d='m22 19.25-9.2 1.77-7.87-1.77v-4.22l-2.25-3.18c-.65-.91-.97-1.36-1.01-1.86q-.02-.28.04-.56c.1-.49.49-.9 1.25-1.75L6.93 10l5.87-2.05 6.4 1.89 2.8 4.01z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M13.53 6.62v3.24' stroke='currentColor' />
    </svg>
  )
}
