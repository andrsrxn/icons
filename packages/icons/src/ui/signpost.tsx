import type { Icon } from './types'

export const IconSignpost: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-signpost'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.3 6.71c.5-.68.75-1.03 1.1-1.24l.25-.13c.37-.15.8-.15 1.64-.15h10.36c.68 0 1.02 0 1.33.1s.59.32 1.12.74l1.8 1.37c.95.74 1.43 1.11 1.43 1.61s-.5.86-1.47 1.58l-1.75 1.3c-.53.4-.8.59-1.11.69s-.65.1-1.32.09l-10.46-.13c-.8-.01-1.2-.02-1.56-.16l-.27-.14c-.33-.2-.57-.52-1.05-1.16-.72-.94-1.08-1.42-1.14-1.96a2 2 0 0 1 0-.42c.05-.55.4-1.03 1.1-2'
        fill='currentColor'
      />
      <path
        d='M3.75 6.55c.55-.47.83-.7 1.16-.83.34-.12.7-.12 1.43-.12h11.14c.7 0 1.05 0 1.37.11s.6.33 1.14.77l.17.14c1.37 1.1 2.06 1.65 2.05 2.38 0 .73-.7 1.26-2.1 2.34l-.14.11c-.53.41-.8.62-1.12.73-.3.1-.65.1-1.32.1H6.29c-.7 0-1.05 0-1.38-.11s-.6-.34-1.15-.8l-.11-.09C2.35 10.23 1.7 9.7 1.7 9s.63-1.24 1.9-2.32z'
        stroke='currentColor'
      />
      <path d='M12 5.19V2.57' stroke='currentColor' />
      <path d='M12 21.35V12.7' stroke='currentColor' />
    </svg>
  )
}
