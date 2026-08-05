import type { Icon } from './types'

export const IconStand: Icon = ({
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
      data-slot='stand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.516 8.498c0-1.285 0-1.927.586-2.326.585-.399 1.528-.399 3.414-.399H16c1.886 0 2.828 0 3.414.4C20 6.57 20 7.212 20 8.497v5.778c0 1.284 0 1.926-.586 2.325-.586.4-1.528.4-3.414.4H7.516c-1.886 0-2.829 0-3.414-.399-.586-.399-.586-1.041-.586-2.325V8.498Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 5.687V3.415m0 17.17V17m-6.378 3.585L11 17m7.378 3.585L13 17m-5.484 0H16c1.886 0 2.828 0 3.414-.586C20 15.828 20 14.886 20 13V9.773c0-1.885 0-2.828-.586-3.414-.586-.586-1.528-.586-3.414-.586H7.516c-1.886 0-2.829 0-3.414.586-.586.586-.586 1.529-.586 3.414V13c0 1.886 0 2.828.586 3.414C4.687 17 5.63 17 7.516 17Z'
      />
    </svg>
  )
}
