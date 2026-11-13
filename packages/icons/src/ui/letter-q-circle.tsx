import type { Icon } from './types'

export const IconLetterQCircle: Icon = ({
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
      data-slot='icon-ui-letter-q-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path d='m12.29 12.78 4.5 4.51' stroke='currentColor' />
      <path
        d='M16.08 11.9c0-2.87-1.99-5.19-4.44-5.19S7.2 9.03 7.2 11.91c0 2.86 1.99 5.18 4.44 5.18 1.24 0 2.37-.6 3.17-1.56a5.7 5.7 0 0 0 1.27-3.63'
        stroke='currentColor'
      />
    </svg>
  )
}
