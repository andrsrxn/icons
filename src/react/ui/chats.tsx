import type { Icon } from './types'

export const IconChats: Icon = ({
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
      data-slot='chats'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.76 14.94c-.79.35-1.43-.58-1.41-1.43.04-1.82-.85-4.49-6.25-5.1-.55-.05 2.26-4.25 5.37-4.25a5.63 5.63 0 0 1 5.44 7.08q-.1.36 0 .71l.44 1.56a1.2 1.2 0 0 1-1.31 1.52l-1.56-.2q-.38-.06-.72.11'
        fill='currentColor'
      />
      <path
        d='M8.8 9.14c0-2.59 2.53-5.19 5.64-5.19a5.63 5.63 0 0 1 5.52 6.71c-.07.37-.1.55-.1.66s0 .17.03.28q.03.13.18.47c.5 1.12.74 1.68.64 2.08a1.2 1.2 0 0 1-.63.77c-.37.19-.97.07-2.17-.18l-.14-.03c-.26-.05-.4-.08-.5-.08l-.23.01c-.1.02-.28.09-.63.22q-.93.35-1.97.35m.75-1.08a5.63 5.63 0 0 1-7.6 5.28c-.35-.13-.52-.2-.63-.22l-.22-.01c-.12 0-.25.03-.51.08l-.14.03c-1.2.25-1.8.37-2.17.18a1.2 1.2 0 0 1-.63-.77c-.1-.4.15-.96.64-2.08.1-.24.16-.36.18-.47l.03-.28c0-.11-.03-.3-.1-.66q-.1-.52-.1-1.08a5.63 5.63 0 1 1 11.25 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
