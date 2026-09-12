import type { Icon } from './types'

export const IconLeaf: Icon = ({
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
      data-slot='icon-ui-leaf'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.52 5.59c4.29-3.82 10-3.91 12.51-3.74.78.06 1.4.62 1.5 1.4.34 2.46.52 8.08-3.62 12.66-3.76 4.15-8.78 3.36-11.27 1.12-2.27-2.05-3.5-7.54.88-11.44'
        fill='currentColor'
      />
      <path
        d='M6.52 5.59c3.67-3.27 8.38-3.8 11.23-3.79 1.1.01 1.66.02 2.23.56s.6 1.08.68 2.16c.17 2.81-.22 7.48-3.75 11.39-3.76 4.15-8.78 3.36-11.27 1.12-2.27-2.05-3.5-7.55.88-11.44'
        stroke='currentColor'
      />
      <path d='M11.9 10.43c-2.22 1.39-6.96 5.74-8.12 12.09' stroke='currentColor' />
    </svg>
  )
}
