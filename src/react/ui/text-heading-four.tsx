import type { Icon } from './types'

export const IconTextHeadingFour: Icon = ({
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
      data-slot='ui-icon-text-heading-four'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.44 21.18v-4.9c0-1.33 0-2-.36-2.11-.35-.11-.72.45-1.47 1.56l-.93 1.39c-.46.68-.69 1.02-.55 1.29.14.26.56.26 1.38.26h3.1M4.18 4.03v14.74m9.1-14.74v14.74m-9.1-7.47h9.1m0-7.27v14.74m-1.45 0h2.9m-12 0h2.9m6.2-14.74h2.9m-12 0h2.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
