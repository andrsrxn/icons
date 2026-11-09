import type { Icon } from './types'

export const IconImageSparkle: Icon = ({
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
      data-slot='icon-ui-image-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 9.76c0-2.82 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88H18.1l-1.27 1.42 2.58 2.44 2.84-2.67V17.2l-5.08-4.61-4.02 3.45-5-7.6-6.42 8.76z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M19.31 1.54c0 1.57-1.7 3.3-3.3 3.3' stroke='currentColor' />
      <path d='M19.31 1.54c0 1.58 1.71 3.3 3.3 3.3' stroke='currentColor' />
      <path d='M19.31 8.13c0-1.55-1.72-3.3-3.3-3.3' stroke='currentColor' />
      <path d='M19.31 8.13c0-1.58 1.73-3.3 3.3-3.3' stroke='currentColor' />
      <path
        d='M22.26 10.97v1.27c0 3.77 0 5.65-1.17 6.83s-3.06 1.17-6.83 1.17H9.74c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83v-.48c0-3.77 0-5.65 1.17-6.82 1.17-1.18 3.06-1.18 6.83-1.18h2.4'
        stroke='currentColor'
      />
      <path
        d='m1.96 17.07 4.63-6.62c.78-1.12 1.17-1.68 1.7-1.66.54.01.9.6 1.61 1.76l2.05 3.35c.62 1.02.94 1.53 1.43 1.58s1.25-.82 2.07-1.7c.65-.7 1.2-1.24 1.61-1.25s.76.33 1.45 1l3.56 3.54'
        stroke='currentColor'
      />
    </svg>
  )
}
