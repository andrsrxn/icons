import type { Icon } from './types'

export const IconAr: Icon = ({
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
      data-slot='icon-ui-ar'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.54 20.55H2.46' stroke='currentColor' />
      <path d='M21.54 3.48H2.46' stroke='currentColor' />
      <path
        d='m3.52 17.1 1.74-5.98c.78-2.71 1.17-4.07 1.93-4.06.75 0 1.14 1.35 1.91 4.06l1.71 5.98'
        stroke='currentColor'
      />
      <path d='M9.46 13.37H4.88' stroke='currentColor' />
      <path d='m16.47 12.99 3.4 4.1' stroke='currentColor' />
      <path d='M14.2 7.07V17.1' stroke='currentColor' />
      <path
        d='M14.23 7.07h3.58a2.8 2.8 0 0 1 2.7 2.87 2.8 2.8 0 0 1-2.7 2.87h-3.58'
        stroke='currentColor'
      />
    </svg>
  )
}
