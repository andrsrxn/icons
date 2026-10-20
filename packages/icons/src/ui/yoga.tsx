import type { Icon } from './types'

export const IconYoga: Icon = ({
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
      data-slot='icon-ui-yoga'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='4.82' r='3.25' fill='currentColor' />
      <circle cx='12' cy='4.82' r='3.25' stroke='currentColor' />
      <path d='M12 10.83s1.67 1.98 3.9 1.98c2.43 0 3.6-1.5 3.6-1.5' stroke='currentColor' />
      <path d='M12 10.83s-1 1.98-3.9 1.98a5.3 5.3 0 0 1-3.6-1.5' stroke='currentColor' />
      <path
        d='M12 8.07v6.85c0 .67 0 1.01.12 1.3q.15.32.42.56c.23.2.56.3 1.2.48l1.56.46a2.14 2.14 0 0 1 .02 4.1l-1.48.44'
        stroke='currentColor'
      />
      <path
        d='M12 8.07v6.06c0 .38 0 .57-.02.74a3 3 0 0 1-1.77 2.4c-.16.07-.34.13-.7.24l-.87.27a2.1 2.1 0 0 0 .08 4.03l1.59.43'
        stroke='currentColor'
      />
    </svg>
  )
}
