import type { Icon } from './types'

export const IconWavesDown: Icon = ({
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
      data-slot='icon-ui-waves-down'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M3.45 15.03A7.8 7.8 0 0 1 8.5 13.3c2.52 0 5.54 2.22 7.99 2.22s3.59-1.2 4.07-1.85'
        stroke='currentColor'
      />
      <path
        d='M3.45 19.97a7.8 7.8 0 0 1 5.04-1.73c2.52 0 5.54 2.21 8 2.21s3.58-1.2 4.06-1.85'
        stroke='currentColor'
      />
      <path d='M12 3.55v5.8' stroke='currentColor' />
      <path
        d='m15.12 7.46-.29.29c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2l-.29-.29'
        stroke='currentColor'
      />
    </svg>
  )
}
