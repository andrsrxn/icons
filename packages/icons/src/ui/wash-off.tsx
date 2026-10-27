import type { Icon } from './types'

export const IconWashOff: Icon = ({
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
      data-slot='icon-ui-wash-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m21.62 8.53-3.87.78c-.49.1-.73.15-.98.14a4 4 0 0 1-.96-.23L9.02 7.18a4 4 0 0 0-1.2-.26c-.3 0-.59.1-1.18.28L2.53 8.53l1.75 7.08c.36 1.46.54 2.19 1.08 2.61.54.43 1.3.43 2.8.43h7.7c1.47 0 2.2 0 2.75-.42.54-.4.73-1.12 1.1-2.55z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='m22.3 5.35-2.02 8.66c-.52 2.23-.78 3.34-1.6 3.99s-1.96.65-4.25.65H9.55c-2.29 0-3.43 0-4.25-.65-.82-.66-1.08-1.77-1.6-4l-2-8.65'
        stroke='currentColor'
      />
      <path
        d='M2.72 9.1A8.7 8.7 0 0 1 8.3 7.2c2.78 0 6.11 2.44 8.83 2.44s3.96-1.31 4.5-2.03'
        stroke='currentColor'
      />
      <path d='m2.74 2.46 18.52 18.5' stroke='currentColor' />
    </svg>
  )
}
