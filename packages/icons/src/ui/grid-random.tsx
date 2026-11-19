import type { Icon } from './types'

export const IconGridRandom: Icon = ({
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
      data-slot='icon-ui-grid-random'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.51 6.46c0 1.77 0 2.65-.52 3.22l-.14.14c-.57.52-1.45.52-3.21.52-1.77 0-2.65 0-3.22-.52l-.14-.14c-.52-.57-.52-1.45-.52-3.22s0-2.65.52-3.22l.14-.14c.57-.52 1.45-.52 3.22-.52 1.76 0 2.64 0 3.21.52l.14.14c.52.57.52 1.45.52 3.22'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.24 9.37c0 1.77 0 2.65-.52 3.22l-.14.14c-.57.52-1.45.52-3.22.52-1.76 0-2.64 0-3.21-.52L3 12.6c-.52-.57-.52-1.45-.52-3.22 0-1.76 0-2.65.52-3.22l.14-.14c.57-.51 1.45-.51 3.21-.51 1.77 0 2.65 0 3.22.51l.14.14c.52.57.52 1.46.52 3.22'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.2 17.57c0 1.77 0 2.65-.52 3.22l-.14.14c-.57.52-1.45.52-3.22.52-1.76 0-2.64 0-3.22-.52l-.13-.14c-.52-.57-.52-1.45-.52-3.22 0-1.76 0-2.65.52-3.22l.13-.14c.58-.51 1.46-.51 3.22-.51s2.65 0 3.22.51l.14.14c.52.57.52 1.46.52 3.22'
        fill='currentColor'
      />
      <path
        d='M17.64 2.58c1.76 0 2.64 0 3.21.52l.14.14c.52.57.52 1.45.52 3.22v0c0 1.77 0 2.65-.52 3.22l-.14.14c-.57.52-1.45.52-3.21.52v0c-1.77 0-2.65 0-3.22-.52l-.14-.14c-.52-.57-.52-1.45-.52-3.22v0c0-1.77 0-2.65.52-3.22l.14-.14c.57-.52 1.45-.52 3.22-.52'
        stroke='currentColor'
      />
      <path
        d='M6.36 5.5c1.77 0 2.65 0 3.22.51l.14.14c.52.57.52 1.46.52 3.22v0c0 1.77 0 2.65-.52 3.22l-.14.14c-.57.52-1.45.52-3.22.52v0c-1.76 0-2.64 0-3.21-.52L3 12.6c-.52-.57-.52-1.45-.52-3.22v0c0-1.76 0-2.65.52-3.22l.14-.14c.57-.51 1.45-.51 3.21-.51'
        stroke='currentColor'
      />
      <path
        d='M15.32 13.7c1.77 0 2.65 0 3.22.51l.14.14c.52.57.52 1.46.52 3.22v0c0 1.77 0 2.65-.52 3.22l-.14.14c-.57.52-1.45.52-3.22.52v0c-1.76 0-2.64 0-3.22-.52l-.13-.14c-.52-.57-.52-1.45-.52-3.22v0c0-1.76 0-2.65.52-3.22l.13-.14c.58-.51 1.46-.51 3.22-.51'
        stroke='currentColor'
      />
    </svg>
  )
}
