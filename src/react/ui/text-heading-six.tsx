import type { Icon } from './types'

export const IconTextHeadingSix: Icon = ({
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
      data-slot='ui-icon-text-heading-six'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.18 4.03v14.74m9.1-14.74v14.74m-9.1-7.47h9.1m0-7.27v14.74m-1.45 0h2.9m-12 0h2.9m6.2-14.74h2.9m-12 0h2.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='19.24'
        cy='19.34'
        r='1.87'
        transform='rotate(90 19.24 19.34)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.38 19.23c0-1.24 0-4.35 2.88-5.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
