import type { Icon } from './types'

export const IconTextToSpeech: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-text-to-speech'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M13.84 14.94V9.07m7.44 6.84V8.1m-3.72 10.74V5.17M10.27 8.1v-.14a1.15 1.15 0 0 0-1.09-1.08H3.39c-.59.03-1.06.5-1.09 1.08v.14m3.98-1.23v10.27m0 0H5m1.3 0h1.26'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
