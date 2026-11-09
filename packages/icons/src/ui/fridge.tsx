import type { Icon } from './types'

export const IconFridge: Icon = ({
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
      data-slot='icon-ui-fridge'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.27c3.04 0 4.56 0 5.62-.79a4 4 0 0 0 .84-.83c.78-1.06.78-2.59.78-5.63v-4.97H4.76v4.97c0 3.04 0 4.57.78 5.63a4 4 0 0 0 .84.83c1.06.79 2.58.79 5.62.79'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M4.75 10.05h14.5' stroke='currentColor' />
      <path d='M8.22 6.84h2.4' stroke='currentColor' />
      <path d='M8.22 13.27h2.4' stroke='currentColor' />
      <path
        d='M4.76 15.02V8.98c0-3.04 0-4.57.78-5.63a4 4 0 0 1 .84-.83c1.06-.79 2.58-.79 5.62-.79v0c3.04 0 4.56 0 5.62.79a4 4 0 0 1 .84.83c.78 1.06.78 2.59.78 5.63v6.04c0 3.04 0 4.57-.78 5.63a4 4 0 0 1-.84.83c-1.06.79-2.58.79-5.62.79v0c-3.04 0-4.56 0-5.62-.79a4 4 0 0 1-.84-.83c-.78-1.06-.78-2.59-.78-5.63'
        stroke='currentColor'
      />
    </svg>
  )
}
