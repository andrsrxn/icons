import type { Icon } from './types'

export const IconPlug: Icon = ({
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
      data-slot='plug'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.62 10.72c-.48-1.24-.71-1.85-.42-2.29C5.5 8 6.16 8 7.48 8h9.11c1.3 0 1.94 0 2.24.42.3.43.08 1.04-.36 2.25l-.5 1.44c-.46 1.28-.7 1.92-1.21 2.29-.52.36-1.2.36-2.56.36H9.92c-1.33 0-2 0-2.5-.35-.52-.35-.76-.97-1.23-2.21z'
        fill='currentColor'
      />
      <path
        d='M5.98 12.4c-.52-1.62-.78-2.43-.56-3.07a2 2 0 0 1 .68-.92C6.64 8 7.5 8 9.2 8h5.63c1.7 0 2.55 0 3.09.4a2 2 0 0 1 .67.92c.23.63-.02 1.44-.53 3.07-.29.93-.43 1.4-.73 1.72a2 2 0 0 1-.63.46c-.4.2-.9.2-1.87.2H9.2c-.97 0-1.45 0-1.85-.2a2 2 0 0 1-.63-.45c-.3-.33-.45-.79-.74-1.71Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M8.82 8V3.5M15.18 8V3.5M12 20.48v-5.72'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
