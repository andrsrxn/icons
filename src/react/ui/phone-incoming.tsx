import type { Icon } from './types'

export const IconPhoneIncoming: Icon = ({
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
      data-slot='phone-incoming'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M10.136 7.853 8.021 4.4c-.18-.295-.468-.52-.811-.47-.518.075-1.398.405-2.573 1.58-1.318 1.318-1.9 5.586 3.293 10.78 5.194 5.193 9.814 3.894 10.87 2.839.982-.982 1.319-1.702 1.425-2.146.08-.34-.14-.634-.439-.816l-3.463-2.12a1.5 1.5 0 0 0-1.675.073l-1.043.771a1.5 1.5 0 0 1-1.952-.146L9.419 12.51a1.5 1.5 0 0 1-.13-1.972l.758-.99a1.5 1.5 0 0 0 .088-1.695Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.207 9.623V3.966m-2.829 2.828h5.657M8.022 4.4l2.114 3.453a1.5 1.5 0 0 1-.089 1.695l-.758.99a1.5 1.5 0 0 0 .13 1.972l2.235 2.235a1.5 1.5 0 0 0 1.952.146l1.043-.77a1.5 1.5 0 0 1 1.675-.074l3.463 2.12c.298.182.52.476.439.816-.106.444-.443 1.164-1.425 2.146-1.055 1.055-5.676 2.354-10.87-2.84C2.737 11.096 3.32 6.828 4.638 5.51 5.813 4.336 6.693 4.006 7.21 3.93c.343-.05.63.176.811.47Z'
      />
    </svg>
  )
}
