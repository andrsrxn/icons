import type { Icon } from './types'

export const IconEarbuds: Icon = ({
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
      data-slot='earbuds'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M10.36 8.038c.037.143.056 1.342.056 1.342v8.036a1.776 1.776 0 1 1-3.551 0v-5.19a3.552 3.552 0 1 1 3.495-4.188Zm3.285 0c-.037.143-.057 1.342-.057 1.342v8.036a1.776 1.776 0 0 0 3.552 0v-5.19a3.552 3.552 0 1 0-3.495-4.188Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.36 8.038c.037.143.056 1.342.056 1.342v8.036a1.776 1.776 0 1 1-3.551 0v-5.19a3.552 3.552 0 1 1 3.495-4.188Zm3.285 0c-.037.143-.057 1.342-.057 1.342v8.036a1.776 1.776 0 0 0 3.552 0v-5.19a3.552 3.552 0 1 0-3.495-4.188Z'
      />
    </svg>
  )
}
