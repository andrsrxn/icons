import type { Icon } from './types'

export const IconArchive: Icon = ({
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
      data-slot='archive'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M4.988 12.555c0-1.886 0-2.829.585-3.414.586-.586 1.529-.586 3.415-.586h6.004c1.886 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v2.809c0 1.886 0 2.828-.586 3.414-.585.586-1.528.586-3.414.586H8.988c-1.886 0-2.829 0-3.415-.586-.585-.586-.585-1.528-.585-3.414v-2.81Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M18.996 8.538v6.826c0 1.886 0 2.828-.586 3.414-.586.586-1.529.586-3.414.586H9.004c-1.885 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V8.538m13.992 0H5.004m13.992 0c.542-.133 1.124-.583 1.257-1.126.043-.176.043-.39.043-.817 0-.427 0-.64-.043-.816a1.5 1.5 0 0 0-1.1-1.1c-.176-.043-.39-.043-.816-.043H5.663c-.427 0-.64 0-.816.043a1.5 1.5 0 0 0-1.1 1.1c-.043.176-.043.39-.043.816 0 .428 0 .641.043.817.133.543.715.993 1.257 1.126m3.74 2.956h6.513'
      />
    </svg>
  )
}
