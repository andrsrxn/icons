import type { Icon } from './types'

export const IconImageSearch: Icon = ({
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
      data-slot='icon-ui-image-search'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 9.76c0-2.82 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88h7.35l.44 1.1c.23.59.35.88.5 1.12A3 3 0 0 0 18 7.31c.28.06.6.06 1.22.06.35 0 .52 0 .69.02a3 3 0 0 1 1.33.48l.54.43.5.42v8.47l-5.1-4.61-4.01 3.45-5-7.6-6.42 8.76z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M11.37 3.76H9.74c-3.77 0-5.66 0-6.83 1.18-1.17 1.17-1.17 3.05-1.17 6.82v.48c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17h4.87c3.44 0 5.15 0 6.28-.99q.21-.18.39-.39c.98-1.13.98-2.84.98-6.27'
        stroke='currentColor'
      />
      <path
        d='m1.96 17.07 4.63-6.62c.78-1.12 1.17-1.68 1.7-1.66.54.01.9.6 1.61 1.76l2.05 3.35c.62 1.02.94 1.53 1.43 1.58s1.25-.82 2.07-1.7c.65-.7 1.2-1.24 1.61-1.25s.76.33 1.45 1l3.56 3.54'
        stroke='currentColor'
      />
      <path d='m20.44 7 2.08 2.07' stroke='currentColor' />
      <path d='M21.31 4.6a3.09 3.09 0 1 0-6.18 0 3.09 3.09 0 0 0 6.18 0' stroke='currentColor' />
    </svg>
  )
}
