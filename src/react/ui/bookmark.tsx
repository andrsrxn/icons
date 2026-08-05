import type { Icon } from './types'

export const IconBookmark: Icon = ({
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
      data-slot='bookmark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M5.65 17.201V8.018c0-1.886 0-2.829.585-3.415.586-.585 1.529-.585 3.414-.585h4.702c1.885 0 2.828 0 3.414.585.586.586.586 1.529.586 3.415V17.2c0 1.852 0 2.777-.577 3.047s-1.287-.325-2.707-1.513l-1.784-1.492c-.613-.513-.92-.77-1.283-.77-.363 0-.67.257-1.283.77l-1.784 1.492c-1.42 1.188-2.13 1.782-2.707 1.513-.577-.27-.577-1.195-.577-3.047Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.65 17.217v-9.2c0-1.885 0-2.828.585-3.414.586-.585 1.529-.585 3.414-.585h4.702c1.885 0 2.828 0 3.414.585.586.586.586 1.529.586 3.415v9.199c0 1.845 0 2.768-.576 3.038-.575.27-1.285-.32-2.703-1.501l-1.793-1.491c-.611-.51-.917-.764-1.279-.764-.362 0-.667.255-1.28.764l-1.792 1.491c-1.418 1.18-2.128 1.77-2.703 1.5-.576-.269-.576-1.192-.576-3.037Z'
      />
    </svg>
  )
}
