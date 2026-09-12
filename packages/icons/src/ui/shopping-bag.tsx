import type { Icon } from './types'

export const IconShoppingBag: Icon = ({
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
      data-slot='icon-ui-shopping-bag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.84 22.47c3.44 0 5.17 0 6.07-1.12.9-1.11.53-2.8-.21-6.16l-1.8-8.24c-.5-2.26-.75-3.39-1.58-4.05-.82-.66-1.98-.66-4.29-.66h-2.17c-2.39 0-3.58 0-4.41.69S5.4 4.79 4.96 7.13l-1.54 8.24c-.62 3.3-.93 4.94-.03 6.02s2.58 1.08 5.92 1.08z'
        fill='currentColor'
      />
      <path
        d='M14.91 22.47c3.32 0 4.98 0 5.88-1.07s.6-2.7.03-5.97l-1.54-8.7c-.42-2.37-.63-3.55-1.47-4.25-.83-.7-2.04-.7-4.44-.7h-2.86c-2.41 0-3.62 0-4.46.7S5.01 4.38 4.6 6.76l-1.5 8.7c-.56 3.25-.84 4.88.06 5.95.9 1.06 2.55 1.06 5.86 1.06z'
        stroke='currentColor'
      />
      <path d='M8.86 6.46a3.13 3.13 0 0 0 6.26 0' stroke='currentColor' />
    </svg>
  )
}
