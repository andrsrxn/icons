import type { Icon } from './types'

export const IconLightningFast: Icon = ({
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
      data-slot='ui-icon-lightning-fast'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m10.5 10.82 3-4.29c1.57-2.24 2.36-3.36 2.93-3.32a1 1 0 0 1 .58.24c.43.38.17 1.73-.33 4.42-.16.84-.24 1.25-.08 1.56a1 1 0 0 0 .27.32c.27.21.7.21 1.54.21h.16c1.5 0 2.25 0 2.55.45l.1.2c.2.49-.23 1.1-1.09 2.34l-3 4.31c-1.62 2.35-2.44 3.52-3.02 3.46a1 1 0 0 1-.54-.22c-.45-.38-.19-1.78.35-4.59.16-.86.24-1.28.07-1.6a1 1 0 0 0-.24-.29c-.28-.23-.71-.23-1.59-.23h-.12c-1.5 0-2.24 0-2.53-.43l-.12-.22c-.18-.49.25-1.1 1.1-2.32'
        fill='currentColor'
      />
      <path
        d='m10.5 10.82 3-4.29h0c1.57-2.24 2.36-3.36 2.93-3.32a1 1 0 0 1 .58.24c.43.38.17 1.73-.33 4.42-.16.84-.24 1.25-.08 1.56a1 1 0 0 0 .27.32c.27.21.7.21 1.54.21h.16c1.5 0 2.25 0 2.55.45l.1.2c.2.49-.23 1.1-1.09 2.34l-3 4.31h0c-1.62 2.35-2.44 3.52-3.02 3.46a1 1 0 0 1-.54-.22c-.45-.38-.19-1.78.35-4.59.16-.86.24-1.28.07-1.6a1 1 0 0 0-.24-.29c-.28-.23-.71-.23-1.59-.23h-.12c-1.5 0-2.24 0-2.53-.43l-.12-.22c-.18-.49.25-1.1 1.1-2.32M9 6.75H2.54M9 17.25H2.54M6.26 12H2.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
