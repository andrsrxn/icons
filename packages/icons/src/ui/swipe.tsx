import type { Icon } from './types'

export const IconSwipe: Icon = ({
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
      data-slot='icon-ui-swipe'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 15.84c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h5.54a2.53 2.53 0 0 0 .73-4.96l-5.1-1.53-.32-.1a3 3 0 0 1-1.96-3.3q0-.1.06-.32l.16-.75a2.58 2.58 0 1 0-5.11-.53z'
        fill='currentColor'
      />
      <path
        d='M12.58 16.62c-3.22-.86-4.82-1.29-5.55-2.54-.72-1.26-.3-2.86.57-6.07v0c.86-3.22 1.29-4.82 2.55-5.55s2.86-.3 6.07.57v0c3.21.86 4.82 1.29 5.54 2.55.73 1.25.3 2.86-.57 6.07v0c-.86 3.21-1.29 4.82-2.54 5.54-1.26.73-2.86.3-6.07-.57'
        stroke='currentColor'
      />
      <path
        d='M15.82 17.67c0 .8 0 1.2-.07 1.53a3.5 3.5 0 0 1-2.77 2.76c-.33.07-.73.07-1.52.07H8.74c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97v-1.3c0-2.13 0-3.2.45-4A3.5 3.5 0 0 1 3.52 8.4c.8-.45 1.87-.45 4-.45'
        stroke='currentColor'
      />
    </svg>
  )
}
