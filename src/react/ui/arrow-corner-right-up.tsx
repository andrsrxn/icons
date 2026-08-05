import type { Icon } from './types'

export const IconArrowCornerRightUp: Icon = ({
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
      data-slot='arrow-corner-right-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M10.932 8.403a.75.75 0 0 1-1.062-1.06l.53.53.532.53Zm.473-1.535.53.53-.53-.53Zm6.837-.004-.53.53.53-.53Zm1.54.479a.75.75 0 0 1-1.06 1.06l.53-.53.53-.53Zm-4.906-2.906v.75-.75Zm-.8 0a.75.75 0 0 1 1.5 0h-1.5ZM4.748 19.488a.75.75 0 0 1 0-1.5v1.5Zm5.653-11.615-.531-.53 1.004-1.005.53.53.531.53-1.003 1.005-.531-.53Zm7.841-1.009.53-.53 1.01 1.009-.53.53-.53.53-1.01-1.009.53-.53Zm-6.837.004-.531-.53c.794-.796 1.452-1.446 2.045-1.89.606-.455 1.228-.76 1.956-.76v1.5c-.272 0-.58.102-1.057.46-.49.366-1.066.932-1.883 1.75l-.53-.53Zm6.837-.004-.53.53c-.827-.827-1.376-1.389-1.846-1.759-.449-.353-.726-.448-.99-.448v-1.5c.737 0 1.337.312 1.918.77.56.44 1.193 1.091 1.979 1.877l-.53.53Zm-3.416-2.427h.75v9.253h-1.5V4.437h.75Zm0 9.253h.75c0 1.598-.557 3.053-1.586 4.113-1.032 1.064-2.497 1.685-4.226 1.685v-1.5c1.356 0 2.422-.48 3.15-1.23.73-.753 1.162-1.821 1.162-3.068h.75Zm-5.062 5.048v.75H4.748v-1.5h5.016v.75Z'
      />
    </svg>
  )
}
