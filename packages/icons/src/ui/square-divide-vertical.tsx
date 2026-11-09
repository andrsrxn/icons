import type { Icon } from './types'

export const IconSquareDivideVertical: Icon = ({
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
      data-slot='icon-ui-square-divide-vertical'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20.72 11.13c0-3.77 0-5.65-1.17-6.83s-3.06-1.17-6.83-1.17h-1.59c-3.77 0-5.65 0-6.82 1.17-1.18 1.18-1.18 3.06-1.18 6.83v1.59c0 3.77 0 5.66 1.18 6.83 1.17 1.17 3.05 1.17 6.82 1.17h1.6c3.76 0 5.65 0 6.82-1.17s1.17-3.06 1.17-6.83z'
        fill='currentColor'
      />
      <path
        d='M12.72 20.72h-1.59c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.06-1.18-6.83v-1.59c0-3.77 0-5.65 1.18-6.83 1.17-1.17 3.05-1.17 6.82-1.17h1.6c3.76 0 5.65 0 6.82 1.17 1.17 1.18 1.17 3.06 1.17 6.83v1.59c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17'
        stroke='currentColor'
      />
      <path d='M11.75 22.34V1.66' stroke='currentColor' />
    </svg>
  )
}
