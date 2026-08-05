import type { Icon } from './types'

export const IconPilcrow: Icon = ({
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
      data-slot='pilcrow'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M13.997 7.516c0-1.886 0-2.829.133-3.414.132-.586.345-.586.77-.586h1.916c.425 0 .638 0 .77.586.133.585.133 1.528.133 3.414V16c0 1.886 0 2.828-.133 3.414-.132.586-.345.586-.77.586H14.9c-.425 0-.638 0-.77-.586-.133-.586-.133-1.528-.133-3.414V7.516Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.719 3.682v16.636M13.915 3.682v16.636m5.883-16.636H9.401c-2.872 0-5.2 2.095-5.2 4.679s2.31 4.679 5.2 4.679h4.514m-1.858 7.278h7.741'
      />
    </svg>
  )
}
