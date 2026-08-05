import type { Icon } from './types'

export const IconMaths: Icon = ({
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
      data-slot='maths'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.713 7.294 6.506-.003m4.07 6.933 5.522 5.518M6.965 4.039l.002 6.506m12.841 3.677-5.517 5.522m5.996-12.45h-6.215M10.219 18.47H3.714m6.505-2.936H3.714'
      />
    </svg>
  )
}
