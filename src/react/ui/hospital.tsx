import type { Icon } from './types'

export const IconHospital: Icon = ({
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
      data-slot='ui-icon-hospital'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.07 3.58h11.89V21h-3.44l-.34-6-2.12-.56-2.17.55L9.6 21H6.07z'
        fill='currentColor'
      />
      <path
        d='M18.3 9.2h.18a3 3 0 0 1 2.92 3.1v2.8c0 2.73 0 4.1-.82 4.97l-.11.1c-.87.83-2.24.83-4.97.83h-7c-2.73 0-4.1 0-4.97-.82l-.1-.11c-.83-.87-.83-2.24-.83-4.97v-2.92A3 3 0 0 1 5.58 9.2h.04'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.96 20.56V8.94c0-2.77 0-4.16-.85-5.03l-.06-.06C16.17 3 14.79 3 12 3c-2.77 0-4.16 0-5.03.85l-.06.06c-.85.87-.85 2.26-.85 5.03v11.62'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.35 21v-3.9c0-.78 0-1.17-.14-1.47a1.5 1.5 0 0 0-.73-.73c-.3-.14-.7-.14-1.47-.14s-1.16 0-1.46.14q-.5.23-.73.73c-.14.3-.14.69-.14 1.46V21m.14-11.52h4.39M12 11.68V7.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
