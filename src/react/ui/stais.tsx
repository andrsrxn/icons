import type { Icon } from './types'

export const IconStais: Icon = ({
  size = 24,
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
      data-slot='stais'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.61 17.57c0-.72 0-1.08.1-1.37A2 2 0 0 1 5 14.89c.3-.1.66-.1 1.38-.1h14v5.56h-14c-.72 0-1.08 0-1.38-.1a2 2 0 0 1-1.3-1.3c-.1-.3-.1-.66-.1-1.38'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7.7 12.02c0-.72 0-1.08.1-1.37a2 2 0 0 1 1.31-1.31c.3-.1.65-.1 1.37-.1h9.9v5.56h-9.9c-.72 0-1.08 0-1.37-.1a2 2 0 0 1-1.31-1.3c-.1-.3-.1-.66-.1-1.38'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.76 5.7c0-.94 0-1.41.3-1.7.28-.3.76-.3 1.7-.3h6.63v5.55h-6.63c-.94 0-1.42 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <path
        d='M20.39 14.8v3.55c0 .94 0 1.4-.3 1.7-.29.3-.76.3-1.7.3h-12c-1.2 0-1.8 0-2.2-.33l-.26-.25c-.32-.4-.32-1-.32-2.2s0-1.8.32-2.2q.12-.15.25-.25c.41-.32 1.01-.32 2.2-.32h3.71m10.3-5.55v5.55m-12.68 0v-2.55c0-1.42 0-2.12.44-2.56s1.14-.44 2.56-.44h3.36m6.32 0V5.7c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3h-3.63c-1.42 0-2.12 0-2.56.44s-.44 1.15-.44 2.56v2.55'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
