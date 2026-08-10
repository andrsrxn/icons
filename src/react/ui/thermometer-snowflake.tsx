import type { Icon } from './types'

export const IconThermometerSnowflake: Icon = ({
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
      data-slot='thermometer-snowflake'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.24 13.96V5.25a1.7 1.7 0 0 1 3.4 0v8.71s1.46 1.6 1.46 2.99a3.17 3.17 0 0 1-6.33 0c0-1.38 1.47-2.99 1.47-2.99'
        fill='currentColor'
      />
      <path
        d='M14.1 14.28a3.42 3.42 0 1 0 3.68 0m-.06-.08v-9a1.78 1.78 0 0 0-3.56 0v9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M16.36 17.08a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0' fill='currentColor' />
      <path
        d='M16.36 17.08a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0ZM11.52 5.37l-.12.28c-.37.86-.56 1.3-.95 1.44-.38.16-.82-.03-1.68-.41l-.28-.12m1.19 12.21-.05-.48c-.1-.93-.16-1.4-.48-1.66-.33-.26-.8-.2-1.73-.1l-.49.05M10.3 12l-5.65-.93m5.13-5.8 1.7 4.37m-3.63 8.69 3.3-4.14M5.76 9.36l.37.5c.56.76.84 1.14.78 1.55-.06.4-.44.69-1.2 1.25l-.5.37m8.95-2.46q-.49-.46-1.2-.6a2.23 2.23 0 1 0 .9 4.06'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
