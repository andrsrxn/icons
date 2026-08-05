import type { Icon } from './types'

export const IconGitPrClosed: Icon = ({
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
      data-slot='git-pr-closed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm11 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M18.25 10.259a.75.75 0 0 0-1.5 0h1.5Zm-2.352-7.002a.75.75 0 0 0-1.061 1.061l.53-.53.53-.53Zm3.205 5.327a.75.75 0 1 0 1.06-1.06l-.53.53-.53.53Zm1.06-4.266a.75.75 0 1 0-1.06-1.06l.53.53.53.53Zm-5.326 3.205a.75.75 0 0 0 1.06 1.06l-.53-.53-.53-.53ZM9 6.5h-.75A1.75 1.75 0 0 1 6.5 8.25v1.5A3.25 3.25 0 0 0 9.75 6.5H9ZM6.5 9v-.75A1.75 1.75 0 0 1 4.75 6.5h-1.5A3.25 3.25 0 0 0 6.5 9.75V9ZM4 6.5h.75c0-.967.784-1.75 1.75-1.75v-1.5A3.25 3.25 0 0 0 3.25 6.5H4ZM6.5 4v.75c.966 0 1.75.783 1.75 1.75h1.5A3.25 3.25 0 0 0 6.5 3.25V4ZM9 17.5h-.75a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25H9ZM6.5 20v-.75a1.75 1.75 0 0 1-1.75-1.75h-1.5a3.25 3.25 0 0 0 3.25 3.25V20ZM4 17.5h.75c0-.966.784-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25H4ZM6.5 15v.75c.966 0 1.75.784 1.75 1.75h1.5a3.25 3.25 0 0 0-3.25-3.25V15ZM20 17.5h-.75a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25H20ZM17.5 20v-.75a1.75 1.75 0 0 1-1.75-1.75h-1.5a3.25 3.25 0 0 0 3.25 3.25V20ZM15 17.5h.75c0-.966.784-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25H15Zm2.5-2.5v.75c.966 0 1.75.784 1.75 1.75h1.5a3.25 3.25 0 0 0-3.25-3.25V15Zm-11 0h.75V9h-1.5v6h.75Zm11 0h.75v-4.741h-1.5V15h.75ZM15.367 3.788l-.53.53 4.266 4.266.53-.53.53-.53-4.265-4.267-.53.53Zm4.266 0-.53-.53-4.266 4.265.53.53.53.53 4.266-4.265-.53-.53Z'
      />
    </svg>
  )
}
