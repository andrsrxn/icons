import type { Icon } from './types'

export const IconTextPhonetic: Icon = ({
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
      data-slot='icon-ui-text-phonetic'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M11.85 11.98H8.5c-2.23 0-4.97.33-4.97 4a3.53 3.53 0 0 0 3.53 3.54h.63c2.3 0 4.16-1.86 4.16-4.16V8.83c0-2.4-1.95-4.35-4.35-4.35h-.14a4.1 4.1 0 0 0-3.83 2.56'
        stroke='currentColor'
      />
      <path
        d='M12.15 12s.3.03 3.35.03c3.9 0 4.97 0 4.97-4.02a3.53 3.53 0 0 0-3.53-3.53h-.63a4.16 4.16 0 0 0-4.16 4.16v6.53c0 2.4 1.95 4.35 4.35 4.35h.14c1.68 0 3.19-1 3.83-2.56'
        stroke='currentColor'
      />
    </svg>
  )
}
