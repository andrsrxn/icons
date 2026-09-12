import type { Icon } from './types'

export const IconHandReceivingHeart: Icon = ({
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
      data-slot='icon-ui-hand-receiving-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.25 1.84c-1.4 0-2.4 1.05-2.72 1.57a3.5 3.5 0 0 0-2.73-1.57c-1.74 0-3.05 1.99-2.48 4.08.56 2.1 3.88 3.8 5.2 5.3 1.33-1.5 4.65-3.2 5.22-5.3s-.75-4.08-2.49-4.08'
        fill='currentColor'
      />
      <path
        d='M18.25 1.84c-1.4 0-2.4 1.05-2.72 1.57a3.5 3.5 0 0 0-2.73-1.57c-1.74 0-3.05 1.99-2.48 4.08.56 2.1 3.88 3.8 5.2 5.3 1.33-1.5 4.65-3.2 5.22-5.3s-.75-4.08-2.49-4.08'
        stroke='currentColor'
      />
      <rect opacity='.2' x='2.19' y='13.68' width='4.01' height='7.91' rx='1' fill='currentColor' />
      <path
        d='M6.2 20.26s1.16.91 2.8 1.29c3.3.75 5 .54 7.92-.46 2.13-.73 3.81-2.69 4.66-3.86.4-.54.4-1.27.05-1.85a1.98 1.98 0 0 0-2.96-.44 27 27 0 0 1-3.72 2.7c-.77.44-2.39.35-3.92.35m3.92-.35c.64-1.57.45-2.82-.24-3.07a11 11 0 0 0-4.03-.62c-3.73 0-4.48.87-4.48.87'
        stroke='currentColor'
      />
      <rect x='2.19' y='13.68' width='4.01' height='7.91' rx='1' stroke='currentColor' />
    </svg>
  )
}
