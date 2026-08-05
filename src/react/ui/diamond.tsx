import type { Icon } from './types'

export const IconDiamond: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='diamond'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='m3.616 10.474 2.687-5.366a1 1 0 0 1 .894-.552h9.581a1 1 0 0 1 .893.549l2.71 5.367a1 1 0 0 1-.146 1.116l-7.497 8.422a1 1 0 0 1-1.495-.001l-7.48-8.423a1 1 0 0 1-.147-1.112Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.616 10.474 2.687-5.366a1 1 0 0 1 .894-.552h9.581a1 1 0 0 1 .893.549l2.71 5.367a1 1 0 0 1-.146 1.116l-7.497 8.422a1 1 0 0 1-1.495-.001l-7.48-8.423a1 1 0 0 1-.147-1.112Z'
      />
    </svg>
  )
}
