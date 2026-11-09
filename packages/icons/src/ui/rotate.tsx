import type { Icon } from './types'

export const IconRotate: Icon = ({
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
      data-slot='icon-ui-rotate'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.11 20.93c-3.77 0-5.66 0-6.83-1.17s-1.17-3.07-1.17-6.86c0-3.78 0-5.68 1.17-6.85s3.06-1.17 6.83-1.17h2.09c3.77 0 5.66 0 6.83 1.17s1.17 3.07 1.17 6.85c0 3.8 0 5.69-1.17 6.86s-3.06 1.17-6.83 1.17z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.37 4.88c-1.46 0-2.19 0-2.78.19a4 4 0 0 0-2.6 2.6c-.19.59-.19 1.32-.19 2.77v2.77c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.9c3.28 0 4.92 0 6.03-.9a4 4 0 0 0 .56-.57c.9-1.1.9-2.74.9-6.02'
        stroke='currentColor'
      />
      <path
        d='M13.1 4.88h3.35c1.63 0 2.44 0 3.06.3a3 3 0 0 1 1.38 1.38c.3.62.3 1.43.3 3.06'
        stroke='currentColor'
      />
      <path
        d='M15.59 1.61 13.63 3.4c-.76.69-1.14 1.03-1.14 1.47 0 .45.38.8 1.13 1.48h0l1.97 1.8'
        stroke='currentColor'
      />
    </svg>
  )
}
