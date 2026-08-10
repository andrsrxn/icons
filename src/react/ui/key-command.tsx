import type { Icon } from './types'

export const IconKeyCommand: Icon = ({
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
      data-slot='key-command'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9.19 6.37v2.8l-2.82.02a2.81 2.81 0 1 1 2.82-2.82m0 11.26v-2.8l-2.82-.02a2.81 2.81 0 1 0 2.82 2.82m5.63-11.26v2.8l2.81.02a2.81 2.81 0 1 0-2.81-2.82m0 11.26v-2.8l2.81-.02a2.81 2.81 0 1 1-2.81 2.82'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M9.19 6.37v2.8l-2.82.02a2.81 2.81 0 1 1 2.82-2.82Zm0 11.26v-2.8l-2.82-.02a2.81 2.81 0 1 0 2.82 2.82Zm5.63-11.26v2.8l2.81.02a2.81 2.81 0 1 0-2.81-2.82Zm0 11.26v-2.8l2.81-.02a2.81 2.81 0 1 1-2.81 2.82ZM9.19 9.19h5.63v5.63H9.18z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
