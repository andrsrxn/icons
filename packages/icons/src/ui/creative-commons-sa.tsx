import type { Icon } from './types'

export const IconCreativeCommonsSa: Icon = ({
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
      data-slot='icon-ui-creative-commons-sa'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.72 12a10.28 10.28 0 1 0 20.56 0 10.28 10.28 0 0 0-20.56 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.72 12a10.28 10.28 0 1 1 20.56 0 10.28 10.28 0 0 1-20.56 0'
        stroke='currentColor'
      />
      <path
        d='m6.73 7.31.26 1c.25.92.37 1.38.74 1.6.36.2.83.08 1.75-.17l1-.26'
        stroke='currentColor'
      />
      <path
        d='M8.52 16.21c.9 1.44 2.28 2.36 3.82 2.36 2.73 0 4.94-2.87 4.94-6.41s-2.21-6.42-4.94-6.42c-2.72 0-3.98 2.82-4.55 3.82'
        stroke='currentColor'
      />
    </svg>
  )
}
