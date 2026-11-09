import type { Icon } from './types'

export const IconPassport: Icon = ({
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
      data-slot='icon-ui-passport'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.85 5.65c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58h-7.7c-1.88 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v12.7c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58h7.7c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42zM12 10.57a2.81 2.81 0 1 1 0-5.63 2.81 2.81 0 0 1 0 5.63'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M11.15 22.35h1.7c3.3 0 4.95 0 5.97-1.02 1.03-1.03 1.03-2.68 1.03-5.98v-6.7c0-3.3 0-4.95-1.03-5.98-1.02-1.02-2.67-1.02-5.97-1.02h-1.7c-3.3 0-4.95 0-5.97 1.02C4.15 3.7 4.15 5.35 4.15 8.65v6.7c0 3.3 0 4.95 1.03 5.98 1.02 1.02 2.67 1.02 5.97 1.02'
        stroke='currentColor'
      />
      <path d='M14.81 7.75a2.81 2.81 0 1 0-5.62 0 2.81 2.81 0 0 0 5.62 0' stroke='currentColor' />
      <path d='M15.19 11.56a5.6 5.6 0 0 0-6.38 0' stroke='currentColor' />
      <path d='M7.96 14.95h8.06' stroke='currentColor' />
      <path d='M9.35 18.21h5.28' stroke='currentColor' />
    </svg>
  )
}
