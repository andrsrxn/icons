import type { Icon } from './types'

export const IconTable: Icon = ({
  size = 24,
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
      data-slot='table'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.13 5.12c0-.47 0-.7.56-.84s1.46-.15 3.26-.15h8.1c1.8 0 2.7 0 3.26.15s.56.37.56.84V7.2c0 .46 0 .7-.56.84s-1.46.14-3.26.14h-8.1c-1.8 0-2.7 0-3.26-.14s-.56-.38-.56-.84z'
        fill='currentColor'
      />
      <path
        d='M4.13 8.18h15.74M4.13 12h15.74M9.14 19.77V8.18m5.72 11.69V8.27M4.13 15.83h15.74M7.95 19.87h8.1c1.8 0 2.7 0 3.26-.56s.56-1.46.56-3.26v-8.1c0-1.8 0-2.7-.56-3.26s-1.46-.56-3.26-.56h-8.1c-1.8 0-2.7 0-3.26.56s-.56 1.46-.56 3.26v8.1c0 1.8 0 2.7.56 3.26s1.46.56 3.26.56Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
