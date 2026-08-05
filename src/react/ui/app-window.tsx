import type { Icon } from './types'

export const IconAppWindow: Icon = ({
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
      data-slot='app-window'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.556 8.767c0-1.886 0-2.829.586-3.414.586-.586 1.528-.586 3.414-.586h8.888c1.886 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v6.466c0 1.886 0 2.829-.586 3.414-.586.586-1.529.586-3.414.586H7.556c-1.886 0-2.828 0-3.414-.586-.586-.585-.586-1.528-.586-3.414V8.767Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M13.995 8.287a.41.41 0 1 1-.818 0 .41.41 0 0 1 .818 0Zm-3.491 0a.41.41 0 1 1-.818 0 .41.41 0 0 1 .818 0Zm-3.491 0a.41.41 0 1 1-.818 0 .41.41 0 0 1 .818 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.556 8.767c0-1.886 0-2.829.586-3.414.586-.586 1.528-.586 3.414-.586h8.888c1.886 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v6.466c0 1.886 0 2.829-.586 3.414-.586.586-1.529.586-3.414.586H7.556c-1.886 0-2.828 0-3.414-.586-.586-.585-.586-1.528-.586-3.414V8.767Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M13.995 8.287a.41.41 0 1 1-.818 0 .41.41 0 0 1 .818 0Zm-3.491 0a.41.41 0 1 1-.818 0 .41.41 0 0 1 .818 0Zm-3.491 0a.41.41 0 1 1-.818 0 .41.41 0 0 1 .818 0Z'
      />
    </svg>
  )
}
