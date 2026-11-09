import type { Icon } from './types'

export const IconBricksX: Icon = ({
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
      data-slot='icon-ui-bricks-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.68 6.68c0-1.89 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59h10.64c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v10.3l-4.36 4.34H6.68c-1.89 0-2.83 0-3.41-.59-.59-.58-.59-1.52-.59-3.4z'
        fill='currentColor'
      />
      <path
        d='M21.32 12.47v-1.79c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.64c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v2.64c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h1.81'
        stroke='currentColor'
      />
      <path d='M2.68 8.5h18.64' stroke='currentColor' />
      <path d='M12 15.5v-7' stroke='currentColor' />
      <path d='M7.39 8.5V2.95' stroke='currentColor' />
      <path d='M7.39 21.14V15.5' stroke='currentColor' />
      <path d='M16.61 8.5V2.95' stroke='currentColor' />
      <path d='M2.68 15.5H13.1' stroke='currentColor' />
      <path d='m22.03 21.56-5.45-5.45' stroke='currentColor' />
      <path d='m16.58 21.56 5.45-5.45' stroke='currentColor' />
    </svg>
  )
}
