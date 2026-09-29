import type { Icon } from './types'

export const IconBlockchain: Icon = ({
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
      data-slot='icon-ui-blockchain'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m17.2 17.32-4.22 2.5a.5.5 0 0 1-.75-.44v-4.75q.01-.29.26-.44l4.21-2.24a.5.5 0 0 1 .74.44v4.5a.5.5 0 0 1-.25.43'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.87 4.4a1.87 1.87 0 1 1-3.74 0 1.87 1.87 0 0 1 3.74 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.25 18.86a1.85 1.85 0 1 1-3.7 0 1.85 1.85 0 0 1 3.7 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.46 18.85a1.87 1.87 0 1 1-3.74 0 1.87 1.87 0 0 1 3.74 0'
        fill='currentColor'
      />
      <path
        d='M6.46 15v-1.6c0-1.13 0-1.69.27-2.15.27-.47.76-.75 1.73-1.31L10 9.05c.98-.56 1.46-.85 2-.85s1.02.29 2 .85l1.54.89c.97.56 1.46.84 1.73 1.3s.27 1.03.27 2.16V15c0 1.14 0 1.7-.27 2.16s-.76.75-1.73 1.31l-1.54.89c-.98.56-1.46.85-2 .85s-1.02-.29-2-.85l-1.54-.89c-.97-.56-1.46-.84-1.73-1.3s-.27-1.03-.27-2.16'
        stroke='currentColor'
      />
      <path d='M6.78 11.58 12 14.45' stroke='currentColor' />
      <path d='M12 14.45v5.6' stroke='currentColor' />
      <path d='M12 6.27V8.1' stroke='currentColor' />
      <path d='m17.22 17.25 1.6.9' stroke='currentColor' />
      <path d='m6.78 17.25-1.64.85' stroke='currentColor' />
      <path d='M17.22 11.58 12 14.45' stroke='currentColor' />
      <path
        d='M13.87 4.4A1.86 1.86 0 0 1 12 6.27a1.87 1.87 0 1 1 1.87-1.87'
        stroke='currentColor'
      />
      <path
        d='M5.25 18.86a1.85 1.85 0 0 1-1.86 1.86 1.85 1.85 0 1 1 1.86-1.86'
        stroke='currentColor'
      />
      <path
        d='M22.46 18.85a1.86 1.86 0 0 1-1.87 1.87 1.87 1.87 0 1 1 1.87-1.87'
        stroke='currentColor'
      />
    </svg>
  )
}
