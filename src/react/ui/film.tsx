import type { Icon } from './types'

export const IconFilm: Icon = ({
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
      data-slot='film'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.758 7.758c0-1.886 0-2.828.16-3.414.16-.586.416-.586.93-.586H7.16c.514 0 .77 0 .93.586.16.586.16 1.528.16 3.414v8.484c0 1.886 0 2.828-.16 3.414-.16.586-.416.586-.93.586H4.848c-.514 0-.77 0-.93-.586-.16-.586-.16-1.528-.16-3.414V7.758Zm12 0c0-1.886 0-2.828.15-3.414.152-.586.394-.586.88-.586h2.183c.485 0 .727 0 .878.586C20 4.93 20 5.872 20 7.758v8.484c0 1.886 0 2.828-.15 3.414-.152.586-.394.586-.88.586h-2.183c-.485 0-.727 0-.878-.586-.151-.586-.151-1.528-.151-3.414V7.758Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.25 20.242v-16M15.758 20V4M20 12H4m4 4.242H4m16 0h-4M8 7.758H4m16 0h-4M7.758 20.242h8.484c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V7.758c0-1.886 0-2.828-.586-3.414-.585-.586-1.528-.586-3.414-.586H7.758c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414v8.484c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586Z'
      />
    </svg>
  )
}
