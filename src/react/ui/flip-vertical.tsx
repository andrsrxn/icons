import type { Icon } from './types'

export const IconFlipVertical: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-flip-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.62 13.44c4.07 0 6.11 0 6.27.82s-1.75 1.56-5.54 3.05l-8.76 3.43c-1.24.49-1.86.73-2.3.43s-.43-.96-.43-2.29v-3.44c0-.94 0-1.41.3-1.7.28-.3.76-.3 1.7-.3zm0-2.88c4.07 0 6.11 0 6.27-.82s-1.75-1.56-5.54-3.05L6.59 3.26c-1.24-.49-1.86-.73-2.3-.43s-.43.96-.43 2.29v3.44c0 .94 0 1.41.3 1.7.28.3.76.3 1.7.3z'
        fill='currentColor'
      />
      <path
        d='M14.62 13.44c4.07 0 6.11 0 6.27.82s-1.75 1.56-5.54 3.05l-8.76 3.43c-1.24.49-1.86.73-2.3.43s-.43-.96-.43-2.29v-3.44c0-.94 0-1.41.3-1.7.28-.3.76-.3 1.7-.3zm0-2.88c4.07 0 6.11 0 6.27-.82s-1.75-1.56-5.54-3.05L6.59 3.26c-1.24-.49-1.86-.73-2.3-.43s-.43.96-.43 2.29v3.44c0 .94 0 1.41.3 1.7.28.3.76.3 1.7.3z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
