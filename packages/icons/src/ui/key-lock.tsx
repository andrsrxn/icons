import type { Icon } from './types'

export const IconKeyLock: Icon = ({
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
      data-slot='icon-ui-key-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.65 12a10.35 10.35 0 1 0 20.7 0 10.35 10.35 0 0 0-20.7 0m7.48-2.87a2.87 2.87 0 0 1 5.74 0c0 .91-1.1 2.25-1.1 2.25.36 1.33 1.44 5.47 1.1 5.92-.35.45-2.87.45-2.87.45s-2.52 0-2.87-.45c-.34-.45.74-4.6 1.1-5.92 0 0-1.1-1.34-1.1-2.25'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.35' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M12 6.25a2.87 2.87 0 0 0-2.87 2.88c0 .91.56 1.77 1.3 2.25l-1.12 3.8c-.35 1.18-.52 1.77-.22 2.17s.91.4 2.14.4h1.56c1.22 0 1.83 0 2.13-.4s.13-.98-.2-2.15l-1.1-3.82a2.8 2.8 0 0 0 1.25-2.25A2.87 2.87 0 0 0 12 6.25'
        stroke='currentColor'
      />
    </svg>
  )
}
