import type { Icon } from './types'

export const IconPipFilled: Icon = ({
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
      data-slot='pip-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.1 16.06V9.83q.02-1.32-.07-2.2a2.7 2.7 0 0 0-.72-1.61 2.7 2.7 0 0 0-1.62-.72q-.87-.09-2.19-.07h-9q-1.32-.02-2.2.07c-.6.09-1.16.27-1.61.72s-.63 1-.72 1.62q-.09.87-.07 2.19v4.34q-.02 1.32.07 2.2c.09.6.27 1.16.72 1.61s1 .63 1.62.72q.87.09 2.19.07h10.07q.91.01 1.55-.05a2.2 2.2 0 0 0 1.42-.68c.33-.37.45-.8.51-1.25q.04-.33.05-.73m-1.5-.86c0-.66 0-1.09-.04-1.4-.03-.3-.1-.4-.14-.44l-.05-.06c-.05-.04-.14-.1-.44-.14-.32-.04-.74-.04-1.4-.04h-2.19c-.66 0-1.08 0-1.4.04-.3.04-.39.1-.44.14l-.05.06c-.05.05-.1.14-.14.44-.04.31-.04.74-.04 1.4s0 1.08.04 1.4c.03.3.1.39.14.44l.05.05c.05.05.14.1.44.14.32.04.74.04 1.4.04h2.19c.66 0 1.08 0 1.4-.04.3-.03.39-.1.44-.14l.05-.05c.04-.05.1-.14.14-.44.04-.32.04-.74.04-1.4'
        fill='currentColor'
      />
    </svg>
  )
}
