import type { Icon } from './types'

export const IconMen: Icon = ({
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
      data-slot='ui-icon-men'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='4.79' r='2.24' fill='currentColor' />
      <path
        opacity='.2'
        d='M7.52 12.28c0-1.42 0-2.13.44-2.57s1.14-.43 2.56-.43h2.96c1.42 0 2.12 0 2.56.43.44.44.44 1.15.44 2.57v2.04a1.5 1.5 0 0 1-1.12 1.39l-.13.04c-.58.2-.97.74-1 1.35v2.14c0 .66 0 .99-.1 1.25-.15.4-.47.7-.86.86-.26.1-.59.1-1.25.1-.65 0-.98 0-1.24-.1a1.5 1.5 0 0 1-.86-.86c-.1-.26-.1-.59-.1-1.25V17.1a1.5 1.5 0 0 0-1.15-1.38l-.16-.05a1.5 1.5 0 0 1-.99-1.34v-2.04'
        fill='currentColor'
      />
      <circle cx='12' cy='4.79' r='2.24' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M7.52 12.28c0-1.42 0-2.13.44-2.57s1.14-.43 2.56-.43h2.96c1.42 0 2.12 0 2.56.43.44.44.44 1.15.44 2.57v2.04a1.5 1.5 0 0 1-1.12 1.39l-.13.04c-.58.2-.97.74-1 1.35v2.14c0 .66 0 .99-.1 1.25-.15.4-.47.7-.86.86-.26.1-.59.1-1.25.1-.65 0-.98 0-1.24-.1a1.5 1.5 0 0 1-.86-.86c-.1-.26-.1-.59-.1-1.25V17.1a1.5 1.5 0 0 0-1.15-1.38l-.16-.05a1.5 1.5 0 0 1-.99-1.34v-2.04'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
