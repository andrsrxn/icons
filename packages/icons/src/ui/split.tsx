import type { Icon } from './types'

export const IconSplit: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-split'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M8.08 2.73H6.7c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42V8.1'
        stroke='currentColor'
      />
      <path
        d='M21.3 8.11V6.73c0-1.89 0-2.83-.58-3.42s-1.53-.58-3.41-.58h-1.39'
        stroke='currentColor'
      />
      <path d='M12 21.77v-9.8' stroke='currentColor' />
      <path d='M3.46 3.44 12 11.98' stroke='currentColor' />
      <path d='M20.54 3.44 12 11.98' stroke='currentColor' />
    </svg>
  )
}
