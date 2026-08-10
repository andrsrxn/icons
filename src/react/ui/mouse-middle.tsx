import type { Icon } from './types'

export const IconMouseMiddle: Icon = ({
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
      data-slot='mouse-middle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M7.24 13.08h9.54v3.43a4.77 4.77 0 0 1-9.54 0zm3.93-4.86.38-.2a1 1 0 0 1 .92 0l.41.2a1 1 0 0 1 .55.9v1.08a1 1 0 0 1-.46.84l-.41.26a1 1 0 0 1-1.1 0l-.38-.26a1 1 0 0 1-.44-.83V9.1a1 1 0 0 1 .53-.89'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M11.99 7.8v-.74zm0 3.93v.75zM10.06 4a.75.75 0 1 0 1.3-.74l-.65.37zm.8-1.63a.75.75 0 1 0-1.3.74l.65-.37zm1.8.96a.75.75 0 0 0 1.37.62l-.68-.31zm1.79-.3a.75.75 0 0 0-1.37-.62l.68.31zm2.3 7.44h-.74v6.05h1.5v-6.05zm-9.53 6.05h.75v-6.05h-1.5v6.05zM12 21.3v-.75a4 4 0 0 1-4.02-4.02h-1.5A5.5 5.5 0 0 0 12 22.05zm4.77-4.77H16c0 2.22-1.8 4.02-4.02 4.02v1.5a5.5 5.5 0 0 0 5.52-5.52zM11.99 5.71v.75c2.22 0 4.02 1.8 4.02 4.02h1.5a5.5 5.5 0 0 0-5.52-5.52zm0 0v-.75a5.5 5.5 0 0 0-5.52 5.52h1.5c0-2.22 1.8-4.02 4.02-4.02zm1.5 4.51h.75v-.91h-1.5v.91zm0-.91h.75c0-1.25-1-2.25-2.25-2.25v1.5c.42 0 .75.33.75.75zM12 7.81v-.75h-.03v.75l.01.75H12zm-.03 0v-.75A2.25 2.25 0 0 0 9.73 9.3h1.5c0-.41.33-.75.74-.75zM10.5 9.3h-.75v.91h1.5V9.3zm0 .91h-.75c0 1.24.99 2.24 2.21 2.26l.02-.75v-.75a.75.75 0 0 1-.73-.76zm1.47 1.5v.76h.02l.01-.75v-.75h-.02zm.03 0v.76a2.25 2.25 0 0 0 2.25-2.26h-1.5c0 .42-.33.76-.75.76zm-.02 1.8v-.74H7.45v1.5h4.52zm0 0v.76h4.8v-1.5h-4.8zm0-7.33h-.75V7.8h1.49l.01-1.6zm0 5.54h-.76l.01 1.8h1.5v-1.8zm-1.26-8.1.66-.36-.5-.9-.66.38-.65.37.5.89zm2.64.02.68.3.42-.91-.69-.3-.68-.32-.42.92z'
        fill='currentColor'
      />
    </svg>
  )
}
